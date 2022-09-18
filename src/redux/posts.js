import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk("fetchPostThunk", async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response;
  } catch (error) {
    return error;
  }
});

export const fetchPostsSlice = createSlice({
  name: "fetchPostsSlice",
  initialState: {
    posts: [],
    status: "idle", // 'idle' | 'loading' | 'success' | 'fail'
    error: null,
  },
  extraReducers: {
    [fetchPosts.pending]: (state, action) => {
      state.posts = [];
      state.status = "loading";
      state.error = null
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.status = "success";
      state.error = null;
    },
    [fetchPosts.rejected]: (state, action) => {
      state.posts = [];
      state.status = "fail";
      state.error = "error";
    },
  },
});

export default fetchPostsSlice.reducer;
