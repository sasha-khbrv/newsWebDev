import { takeEvery, put, call, fork } from "@redux-saga/core/effects";
import { GET_NEWS } from "../constants";
import { getLatestNews, getPopularNews } from "../../api";
import { setLatestNews, setPopularNews } from "../actions/actionCreator";

export function* handleLatestNews() {
  const { hits } = yield call(getLatestNews);
  yield put(setLatestNews(hits));
}
export function* handlePopularNews() {
  const { hits } = yield call(getPopularNews);
  yield put(setPopularNews(hits));
}

// describes requests' logic, work with api, any async stuff
export function* handleNews() {
  yield fork(handleLatestNews);
  yield fork(handlePopularNews);
}

// watches for actions
export function* watchClickSaga() {
  yield takeEvery(GET_NEWS, handleNews);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
