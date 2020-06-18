import { combineReducers } from "redux";
import postReducer from "./postReducer";
import postsReducer from "./postsReducer";
import categoriesReducer from "./categoriesReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  post: postReducer,
  posts: postsReducer,
  category: categoriesReducer,
  auth: authReducer,
});

export default rootReducer;
