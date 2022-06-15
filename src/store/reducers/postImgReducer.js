import { SET_POST_IMG } from "../actions/actionTypes";

const INITIAL_STATE = {
  imgURL: null,
};

const postImgReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_POST_IMG:
      return { imgURL: action.payload };
    default:
      return state;
  }
};

export default postImgReducer;
