import { call, put, takeLatest } from "redux-saga/effects";
import { push } from "react-router-redux";
import apiRequest from "utils/api";
import {
  defaultReturn,
  makePayload,
  generateDefaultActions,
  generateSwitch,
  requestSaga,
  subKeySaga,
  fillDictionary
} from "../utils/helpers";
import { ToastError } from "components/Global/Toasts/Toasty";

const initialState = {
  authed: true,
};


export const AUTH_LOGIN_SUCCESS = "AUTH_LOGIN_SUCCESS";
export function loginSuccess(payload) {
  return {
    type: AUTH_LOGIN_SUCCESS,
    payload
  };
}

export const AUTH_LOGIN_CHECK_TOKEN = "AUTH_LOGIN_CHECK_TOKEN";
export function checkAuth() {
  return {
    type: AUTH_LOGIN_CHECK_TOKEN
  };
}

// Reducer
export default function authReducer(state = initialState, { type, payload }) {
  switch (type) {
    case AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        authed: true,
        loaded: true,
      };
    default:
      return state;
  }
}

export function* authSaga() {
  yield takeLatest(AUTH_LOGIN_CHECK_TOKEN, checkToken);
}

function* checkToken() {
    yield put(loginSuccess(true));
}
