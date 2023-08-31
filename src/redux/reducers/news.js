import { SET_LATEST_NEWS, SET_POPULAR_NEWS } from "../constants";

const INITIAL_STATE = {
  latestNews: [],
  popularNews: [],
};

export const news = (state = INITIAL_STATE, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case SET_LATEST_NEWS:
      return { ...state, latestNews: payload };
    case SET_POPULAR_NEWS:
      return { ...state, popularNews: payload };
    default:
      return state;
  }
};
