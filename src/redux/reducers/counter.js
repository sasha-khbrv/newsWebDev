import { DECREASE_COUNT, INCREASE_COUNT } from "../constants";

const INITIAL_STATE = {
  count: 0,
};

export const counter = (state = INITIAL_STATE, actions) => {
  switch (actions?.type) {
    case INCREASE_COUNT:
      return { ...state, count: state.count + 1 };
    case DECREASE_COUNT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};
