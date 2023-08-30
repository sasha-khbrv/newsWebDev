import { SET_LATEST_NEWS } from "../constants";

const INITIAL_STATE = {
  latestNews: [],
};

export const news = (state = INITIAL_STATE, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case SET_LATEST_NEWS:
      return { ...state, latestNews: [...state.latestNews, ...payload] };
    default:
      return state;
  }
};
