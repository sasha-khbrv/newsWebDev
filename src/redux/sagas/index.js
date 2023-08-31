import { takeEvery, put, call, fork, spawn } from "@redux-saga/core/effects";
import { GET_NEWS } from "../constants";
import { getLatestNews, getPopularNews } from "../../api";
import {
  setLatestNews,
  setLatestNewsErrors,
  setPopularNews,
  setPopularNewsErrors,
} from "../actions/actionCreator";

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
