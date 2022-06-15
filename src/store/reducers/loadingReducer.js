import { SET_LOADING } from "../actions/actionTypes";

const INITIAL_STATE = false;

const loadingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_LOADING:
      return action.payload;
    default:
      return state;
  }
};

export default loadingReducer;
