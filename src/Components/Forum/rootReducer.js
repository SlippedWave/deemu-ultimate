import { combineReducers } from "redux";
import TogglePostModalReducer from "./togglePostModalReducer";
import userReducer from "./userReducer";
import postImgReducer from "./postImgReducer";
import loadingReducer from "./loadingReducer";
import postReducer from "./postReducer";

const rootReducer = combineReducers({
  togglePostModalState: TogglePostModalReducer,
  userState: userReducer,
  ImgState: postImgReducer,
  loadingState: loadingReducer,
  postState: postReducer,
});

export default rootReducer;
