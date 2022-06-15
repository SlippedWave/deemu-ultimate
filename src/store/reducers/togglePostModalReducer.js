import { TOGGLE_POST_MODAL } from "../actions/actionTypes";

const INITIAL_STATE = {
  display: "none",
};

const TogglePostModalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_POST_MODAL:
      return { display: action.payload };
    default:
      return state;
  }
};

export default TogglePostModalReducer;
