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
  console.log("payload::", payload);
  console.log("payload data:", payload.data);
  console.log("payload data TTYYYPPEE:", payload.data.type);

  if (payload.data.type === "authCheck") {
    const response = yield call(authCheckService, data);

    console.log("authcheck res::", response);
    const res = response.data.authCheckUser;

    if (res.isLoggedIn) {
      yield put({
        type: types.LOGIN_USER_SUCCESS,
        response: res
      });
    } else if (res.success === false) {
      yield put({ type: types.LOGIN_USER_ERROR, response: res });
    }
  } else {
    const response = yield call(loginUserService, data);

    console.log("login res::", response);
    const res = response.data.userLogin;

    if (res.isLoggedIn) {
      yield put({
        type: types.LOGIN_USER_SUCCESS,
        response: res
      });
    } else if (res.success === false) {
      yield put({ type: types.LOGIN_USER_ERROR, response: res });
    }
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
