import { combineReducers } from "redux";
import {
  registerReducer,
  loginReducer,
  authCheckReducer,
  logOutReducer
} from "./auth.reducer";

const rootReducer = combineReducers({
  registerReducer,
  loginReducer,
  logOutReducer,
  authCheckReducer
});

export default rootReducer;
