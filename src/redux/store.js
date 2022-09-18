import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./posts";
import fetchPostByIdReducer from "./postbyid";

export default configureStore({
  reducer: {
    posts: postsReducer,
    postbyid: fetchPostByIdReducer
  }
});