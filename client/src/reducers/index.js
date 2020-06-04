import { combineReducers } from "redux";
import postReducer from "./postReducer";
import postsReducer from "./postsReducer";
import categoriesReducer from "./categoriesReducer";

const rootReducer = combineReducers({
  post: postReducer,
  posts: postsReducer,
  category: categoriesReducer,
});

export default rootReducer;
