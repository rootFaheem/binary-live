import { put, call } from "redux-saga/effects";
import {
  loginUserService,
  authCheckService,
  logOutUserService
} from "../services/authService.services";

import * as types from "../action.types";

export function* loginSaga(payload) {
  // if (payload.user.type === "login") {
  const response = yield call(loginUserService, payload);

  if (response.isLoggedIn) {
    yield put({ type: types.LOGIN_USER_SUCCESS, response });
  } else if (response.success === false) {
    yield put({ type: types.LOGIN_USER_ERROR, response });
  }
  // } else if (payload.user.type === "authCheck") {
  //   try {
  //     const response = yield call(authCheckService, payload);
  //     yield put({ type: types.LOGIN_USER_SUCCESS, response });
  //   } catch (error) {
  //     yield put({ type: types.LOGIN_USER_ERROR, error });
  //   }
  // }
}

export function* logoutUserSaga() {
  try {
    const response = yield call(logOutUserService);
    if (response.success) {
      yield put({ type: types.LOG_OUT_USER_SUCCESS, response });
      window.location.replace("/login");
    }
  } catch (error) {
    yield put({ type: types.LOG_OUT_USER_ERROR, error });
  }
}
