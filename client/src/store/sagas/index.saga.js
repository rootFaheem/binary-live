import { fork } from "redux-saga/effects";
import watchSagas from "./watcher";

export default function* startForman() {
  yield fork(watchSagas);
}
