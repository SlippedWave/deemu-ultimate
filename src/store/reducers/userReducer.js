import { SET_USER } from "../actions/actionTypes";

const LocalUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
const INITIAL_STATE = { user: LocalUser() };

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      return { user: action.payload };
    default:
      return state;
  }
};

export default userReducer;
