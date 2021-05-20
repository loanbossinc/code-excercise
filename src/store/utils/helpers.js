import { call, put } from "redux-saga/effects";

export const initialState = {
  error: ""
};
export function defaultReturn(state, payload, name) {
  const propName = name || "item";
  return {
    ...state,
    [propName]: payload
  };
}
export function executeCallback(callback){
  if(callback && typeof(callback) === "function")
    callback()
}
// This function is used for storing substates that are specific to some value.
// Used for when multiple components need data of a particular shape and it does not make sense to make multiple flat structures in the
// redux store.
export function fillDictionary(state, payload, name, subName) {
  const propName = name;
  const copy = { ...state[propName] };
  copy[subName] = payload;
  return {
    ...state,
    [propName]: copy
  };
}

export function makePayload(type, payload) {
  return {
    type,
    ...payload
  };
}

export function makeReadPayload(type, payload) {
  return {
    type,
    ...payload
  };
}

export function makeWritePayload(type, payload) {
  return {
    type,
    payload
  };
}

export function generateSwitch(stringBase) {
  return {
    value: stringBase,
    on: `${stringBase}_ON`,
    off: `${stringBase}_OFF`,
    turnOn: function() {
      return {
        type: this.on,
        value: true
      };
    },
    turnOff: function() {
      return {
        type: this.off,
        value: false        
      };
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
    createFailure(payload,optionalSubKey) {
      return {
        type: this.failure,
        payload,
        subKey: optionalSubKey
      };
    }
  };
}

export const handleCallback = (payload) => {
  if (!payload.callback) return () => null;
  const callback = payload.callback;
  delete payload.callback;
  return () => !!callback ? callback() : null;
}

export function* requestSaga(actionType, path, method, body, header, ignoreError) {
  try {
    const response = yield call(path, method, body, header);    
    yield put(actionType.createSuccess(response));
    return {error: false}
  } catch (error) {    
    if(!ignoreError)
      yield put(actionType.createFailure(error));          
    return { error: true}
  }
}
export function callbackSaga(callback){
  return function* requestSaga(actionType, path, method, body, header){
    try {
      const response = yield call(path, method, body, header);
      yield put(actionType.createSuccess(response));
      executeCallback(callback);
    } catch (error) {
      yield put(actionType.createFailure(error));
    }
  }
}

export function subKeySaga(subKey, callback){

  return function* requestSaga(actionType, path, method, body, header){
    try {
      const response = yield call(path, method, body, header);
      yield put(actionType.createSuccess(response, subKey));
      executeCallback(callback);
    } catch (error) {
      yield put(actionType.createFailure(error, subKey));
    }
  }
}

