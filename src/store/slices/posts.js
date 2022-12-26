import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk("posts/getPosts", async (thunkAPI) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=20").then
    ((data) => data.json()
  );
  return res;
});

const postsAdapter = createEntityAdapter({
  selectId: (posts) => posts.id,
});

export const postSlice = createSlice({
  name: "posts",
  initialState: postsAdapter.getInitialState({ loading: false }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPosts.fulfilled, (state, { payload }) => {
        state.loading = false;
        postsAdapter.setAll(state, payload);
      })
      .addCase(getPosts.rejected, (state) => {
        state.loading = true;
      })
  },
});

export const postSelector = postsAdapter.getSelectors((state) => state.posts);

export const postReducer = postSlice.reducer;
