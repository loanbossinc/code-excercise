import { all } from "redux-saga/effects";

import { authSaga } from "store/state/auth";


export default function* RootSaga() {
  yield all([
    authSaga(),

  ]);
}
