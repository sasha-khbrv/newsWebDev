import {
  INCREASE_COUNT,
  DECREASE_COUNT,
  GET_LATEST_NEWS,
  SET_LATEST_NEWS,
} from "../constants";

export const increaseConunt = () => ({ type: INCREASE_COUNT });
export const decreaseConunt = () => ({ type: DECREASE_COUNT });

export const getLatestNews = () => ({ type: GET_LATEST_NEWS });

export const setLatestNews = (payload) => ({
  type: SET_LATEST_NEWS,
  payload,
});
