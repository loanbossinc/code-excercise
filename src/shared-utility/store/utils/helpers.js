import { call, put } from "redux-saga/effects";
import { authorizedRequest } from "utils/api";

export const initialState = { error: "" };

export function defaultReturn(state, payload, name) {
  if (!payload) return { ...state };

  const propName = name || "item";
  return { ...state, [propName]: payload };
}

export function multipleObjectReturn(state, names, payloadItems, subKeys) {
  if (!names) return { ...state };
  const final = {};
  for (let index = 0; index < names.length; index++) {
    if (subKeys && !!subKeys[index]) {
      const propName = names[index];
      const copy = { ...state[propName] };
      copy[subKeys[index]] = payloadItems[index];
      final[propName] = copy;
    } else {
      const propName = names[index];
      const item = payloadItems[index];
      final[propName] = item;
    }
  }
  return { ...state, ...final };
}

export function executeCallback(callback) {
  if (callback && typeof callback === "function") callback();
}
// This function is used for storing substates that are specific to some value.
// Used for when multiple components need data of a particular shape and it does not make sense to make multiple flat structures in the
// redux store.
export function fillDictionary(state, payload, name, subName) {
  const propName = name;
  const copy = { ...state[propName] };
  copy[subName] = payload;
  return { ...state, [propName]: copy };
}

export const makePayload = (type, payload) => ({ type, ...payload });
export const makeReadPayload = (type, payload) => ({ type, ...payload });
export const makeWritePayload = (type, payload) => ({ type, payload });

export function generateSwitch(stringBase) {
  return {
    value: stringBase,
    on: `${stringBase}_ON`,
    off: `${stringBase}_OFF`,
    turnOn() {
      return { type: this.on, value: true };
    },
    turnOff() {
      return { type: this.off, value: false };
    }
  };
}

export function generateDefaultActions(stringBase) {
  return {
    value: stringBase,
    success: `${stringBase}_SUCCESS`,
    failure: `${stringBase}_FAILURE`,
    createSuccess(payload, optionalSubKey) {
      return {
        type: this.success,
        payload,
        subKey: optionalSubKey
      };
    },
    createFailure(payload, optionalSubKey) {
      return {
        type: this.failure,
        payload,
        subKey: optionalSubKey
      };
    }
  };
}

export const handleCallback = payload => {
  if (!payload.callback) return () => null;
  const { callback } = payload;
  delete payload.callback;
  return () => (callback ? callback() : null);
};

export function* requestSaga(actionType, path, method, body, header, ignoreError, useV2Api = false) {
  try {
    const response = yield call(authorizedRequest, path, method, body, header, useV2Api);
    yield put(actionType.createSuccess(response));
    return { error: false };
  } catch (error) {
    if (!ignoreError) yield put(actionType.createFailure(error));
    return { error: true };
  }
}

export function callbackSaga(callback) {
  return function* requestSaga(actionType, path, method, body, header) {
    try {
      const response = yield call(authorizedRequest, path, method, body, header);
      yield put(actionType.createSuccess(response));
      executeCallback(callback);
    } catch (error) {
      yield put(actionType.createFailure(error));
    }
  };
}

export function subKeySaga(subKey, callback) {
  return function* requestSaga(actionType, path, method, body, header) {
    try {
      const response = yield call(authorizedRequest, path, method, body, header);
      yield put(actionType.createSuccess(response, subKey));
      executeCallback(callback);
    } catch (error) {
      yield put(actionType.createFailure(error, subKey));
    }
  };
}

export function makeIsLoadingReducer(request, success, failure) {
  return function reducer(state = false, action) {
    if (action.type === request.value) {
      return true;
    } else if (action.type === request.success || action.type === request.failure) {
      return false;
    }
    return state;
  };
}
