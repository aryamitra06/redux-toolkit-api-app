import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchPosts = createAsyncThunk('fetchPostThunk', async () => {
  try {
    const response = await axios.get(POSTS_URL)
    return response;
  } catch (error) {
    return error;
  }
})

export const counterSlice = createSlice({
  name: "userSlice",
  initialState: {
    posts: [],
    status: 'idle', // 'idle' | 'loading' | 'success' | 'fail'
    error: null
  },
  extraReducers: {
    [fetchPosts.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.posts = action.payload
      state.status = 'success'
    },
    [fetchPosts.rejected]: (state, action) => {
      state.status = 'fail'
    },
  }
});

export default counterSlice.reducer;