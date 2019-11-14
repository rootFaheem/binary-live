import * as types from "../action.types";

export const registerUserAction = data => {
  return {
    type: types.REGISTER_USER,
    data
  };
};

export const loginUserAction = data => {
  console.log("data:", data);
  console.log("data.graphqlQuery:", data.graphqlQuery);
  console.log("data.type:", data.type);
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
