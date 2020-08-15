import { put, call, take } from "redux-saga/effects";
import { api_1 } from "../apis/api";

function* fetchData() {
  try {
    const data = yield call(api_1);
    yield put({ type: "FETCHING_API_1_SUCCESS", data });
  } catch (e) {
    yield put({ type: "FETCHING_API_1_FAILURE", error: e });
  }
}

function* dataSaga() {
  while (true) {
    // saga will wait till this type is dispatched
    yield take("FETCHING_API_1");
    // will call and wait till its completed
    yield call(fetchData);
    // then goes to next iteration in while loop
    // i.e now again it will wait for the action to be dispatched
  }
}

export default dataSaga;