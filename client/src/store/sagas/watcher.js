import { takeLatest } from "redux-saga/effects";
import * as types from "../action.types";

import { registerSaga, loginSaga, authCheckSaga } from "./auth.saga";

export default function* watchSagas() {
  yield takeLatest(types.LOGIN_USER, loginSaga);
  yield takeLatest(types.REGISTER_USER, registerSaga);
  yield takeLatest(types.AUTH_CHECK, authCheckSaga);
}
