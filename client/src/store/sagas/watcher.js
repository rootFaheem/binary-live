import { takeLatest } from "redux-saga/effects";
import * as types from "../action.types";

import { loginSaga } from "./auth.saga";

export default function* watchSagas() {
  yield takeLatest(types.LOGIN_USER, loginSaga);
}
