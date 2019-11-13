import { put, call } from "redux-saga/effects";
import {
  registerUserService,
  loginUserService,
  authCheckService,
  logOutUserService
} from "../services/authService.services";

import * as types from "../action.types";

export function* registerSaga(payload) {
  const response = yield call(registerUserService, payload);

  if (response.isRegistered) {
    yield put({ type: types.REGISTER_USER_SUCCESS, response });
  } else if (response.success === false) {
    yield put({ type: types.REGISTER_USER_ERROR, response });
  }
}

export function* loginSaga(payload) {
  const response = yield call(loginUserService, payload);
  console.log("res login:", response);
  if (response.data.userLogin.isLoggedIn) {
    yield put({
      type: types.LOGIN_USER_SUCCESS,
      response: response.data
    });
  } else if (response.success === false) {
    yield put({ type: types.LOGIN_USER_ERROR, response });
  }
}

export function* authCheckSaga(payload) {
  const response = yield call(authCheckService, payload);
  if (response.data.authCheckUser.authCheck) {
    yield put({
      type: types.AUTH_CHECK_SUCCESS,
      response: response.data.authCheckUser
    });
  } else if (response.success === false) {
    yield put({ type: types.AUTH_CHECK_ERROR, response });
  }
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
