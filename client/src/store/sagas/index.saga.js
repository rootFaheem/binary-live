import { fork } from "redux-saga/effects";
import watchSagas from "./wathcers";

export default function* startForman() {
  yield fork(watchSagas);
}
