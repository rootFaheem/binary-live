import * as types from "../action.types";

export const loginUserAction = user => {
  return {
    type: types.LOGIN_USER,
    user
  };
};

export const logOutUserAction = user => {
  return {
    type: types.LOG_OUT_USER,
    user
  };
};
