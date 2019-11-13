import { combineReducers } from "redux";
import { registerReducer, loginReducer, logOutReducer } from "./auth.reducer";

const rootReducer = combineReducers({
  registerReducer,
  loginReducer,
  logOutReducer
});

export default rootReducer;
