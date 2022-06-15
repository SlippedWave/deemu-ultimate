import { SET_POST } from "../actions/actionTypes";

const INITIAL_STATE = [];

const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_POST:
      return action.payload;
    default:
      return state;
  }
};

export default postReducer;
