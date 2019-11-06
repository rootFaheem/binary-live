import { fork } from "redux-saga/effects";
import watchSagas from "./wathcer";

export default function* startForman() {
  yield fork(watchSagas);
}
