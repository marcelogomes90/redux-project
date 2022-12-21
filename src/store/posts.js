import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  loading: false,
};

export const getPosts = createAsyncThunk("posts/getPosts", async (thunkAPI) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts").then
    ((data) => data.json()
  );
  return res;
});

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.loading = true;
    },
    [getPosts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.posts = payload;
    },
    [getPosts.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const postReducer = postSlice.reducer;
