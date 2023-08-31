import {
  SET_LATEST_NEWS,
  SET_POPULAR_NEWS,
  SET_LATEST_NEWS_ERROR,
  SET_POPULAR_NEWS_ERROR,
  SET_IS_LOADING,
} from "../constants";

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

export const setIsLoading = (payload) => ({
  type: SET_IS_LOADING,
  payload,
});