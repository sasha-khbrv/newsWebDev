import { SET_IS_LOADING } from "../constants";

const INITIAL_STATE = {
  isLoading: false,
};

export const loaders = (state = INITIAL_STATE, actions) => {
  console.log(actions);
  switch (actions?.type) {
    case SET_IS_LOADING:
      return { ...state, isLoading: actions?.payload };
    default:
      return state;
  }
};
