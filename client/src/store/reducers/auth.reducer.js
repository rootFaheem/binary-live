import * as types from "../action.types";

const initialState = {
  isLoggedIn: false,
  isRegistered: false
};

export const registerReducer = (state = initialState, action) => {
  const response = action.response;

  switch (action.type) {
    case types.REGISTER_USER_SUCCESS:
      // if (response.isLoggedIn === true) {
      return response;
    // }
    // return state;
    case types.REGISTER_USER_ERROR:
      return response;

    default:
      return state;
  }
};

export const loginReducer = (state = initialState, action) => {
  const response = action.response;

  console.log("response", response);
  switch (action.type) {
    case types.LOGIN_USER_SUCCESS:
      if (response.isLoggedIn === true) {
        return response;
      }
      return state;
    case types.LOGIN_USER_ERROR:
      return { ...state, response };

    default:
      return state;
  }
};

export const authCheckReducer = (state = initialState, action) => {
  const response = action.response;

  switch (action.type) {
    case types.AUTH_CHECK_SUCCESS:
      if (response.isLoggedIn === true) {
        return response;
      }
      return state;
    case types.AUTH_CHECK_ERROR:
      return { ...state, response };

    default:
      return state;
  }
};

export const logOutReducer = (state = initialState, action) => {
  const response = action.response;

  switch (action.type) {
    case types.LOG_OUT_USER_SUCCESS:
      return state;
    case types.LOG_OUT_USER_ERROR:
      return response;

    default:
      return state;
  }
};
