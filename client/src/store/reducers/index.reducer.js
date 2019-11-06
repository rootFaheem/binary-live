import { combineReducers } from "redux";
import { loginReducer, authCheckReducer, logOutReducer } from "./auth.reducer";

const rootReducer = combineReducers({
  loginReducer,
  logOutReducer,
  authCheckReducer
});

export default rootReducer;
