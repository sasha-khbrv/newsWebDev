import { SET_LATEST_NEWS_ERROR, SET_POPULAR_NEWS_ERROR } from "../constants";

const INITIAL_STATE = {
  latestNewsError: null,
  popularNewsError: null,
};

export const errors = (state = INITIAL_STATE, actions) => {
  switch (actions?.type) {
    case SET_LATEST_NEWS_ERROR:
      return { ...state, latestNewsError: actions?.payload };
    case SET_POPULAR_NEWS_ERROR:
      return { ...state, popularNewsError: actions?.payload };
    default:
      return state;
  }
};
