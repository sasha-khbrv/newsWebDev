import { takeEvery, put, call, fork, all } from "@redux-saga/core/effects";
import { getLatestNews, getPopularNews } from "../../api";
import {
  setLatestNews,
  setLatestNewsErrors,
  setPopularNews,
  setPopularNewsErrors,
} from "../actions/actionCreator";
import { GET_POPULAR_NEWS, GET_LATEST_NEWS } from "../constants";

export function* handleLatestNews() {
  try {
    const { hits } = yield call(getLatestNews);
    yield put(setLatestNews(hits));
  } catch (error) {
    yield put(setLatestNewsErrors("Error in fetching latest news"));
  }
}

export function* handlePopularNews() {
  try {
    const { hits } = yield call(getPopularNews);
    yield put(setPopularNews(hits));
  } catch (error) {
    yield put(setPopularNewsErrors("Error in fetching popular news"));
  }
}

// watches for actions
export function* watchPopularSaga() {
  yield takeEvery(GET_POPULAR_NEWS, handlePopularNews);
}
export function* watchLatestrSaga() {
  yield takeEvery(GET_LATEST_NEWS, handleLatestNews);
}

export default function* rootSaga() {
  yield all([fork(watchPopularSaga), fork(watchLatestrSaga)]);
}
