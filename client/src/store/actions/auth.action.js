import * as types from "../action.types";

export const registerUserAction = data => {
  return {
    type: types.REGISTER_USER,
    data
  };
};

export const authCheckAction = data => {
  return {
    type: types.LOGIN_USER,
    data
  };
};

export const loginUserAction = data => {
  console.log("data actionnnnn:::", data);
  return {
    type: types.LOGIN_USER,
    data
  };
};

export const logOutUserAction = data => {
  return {
    type: types.LOG_OUT_USER,
    data
  };
};
