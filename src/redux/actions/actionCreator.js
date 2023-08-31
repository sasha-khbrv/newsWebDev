import {
  INCREASE_COUNT,
  DECREASE_COUNT,
  SET_LATEST_NEWS,
  SET_POPULAR_NEWS,
  GET_NEWS,
  SET_LATEST_NEWS_ERROR,
  SET_POPULAR_NEWS_ERROR,
} from "../constants";

export const increaseConunt = () => ({ type: INCREASE_COUNT });
export const decreaseConunt = () => ({ type: DECREASE_COUNT });

export const setLatestNews = (payload) => ({
  type: SET_LATEST_NEWS,
  payload,
});

export const setPopularNews = (payload) => ({
  type: SET_POPULAR_NEWS,
  payload,
});

export const setLatestNewsErrors = (payload) => ({
  type: SET_LATEST_NEWS_ERROR,
  payload,
});

export const setPopularNewsErrors = (payload) => ({
  type: SET_POPULAR_NEWS_ERROR,
  payload,
});

export const getNews = () => ({ type: GET_NEWS });
