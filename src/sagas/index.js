import { all } from "redux-saga/effects";

import api_1 from "./api_1";

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([api_1()]);
}