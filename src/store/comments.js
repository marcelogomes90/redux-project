import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
  loading: false,
};

export const getComments = createAsyncThunk("comments/getComments", async (thunkAPI) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments?_limit=100").then
    ((data) => data.json()
  );
  return res;
});

const commentsAdapter = createEntityAdapter({
  selectId: (comments) => comments.id,
});

export const commentSlice = createSlice({
  name: "comments",
  initialState: commentsAdapter.getInitialState({ loading: false }),
  reducers: {},
  extraReducers: {
    [getComments.pending]: (state) => {
      state.loading = true;
    },
    [getComments.fulfilled]: (state, { payload }) => {
      state.loading = false;
      commentsAdapter.setAll(state, payload);
    },
    [getComments.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const commentSelector = commentsAdapter.getSelectors((state) => state.comments);

export const commentReducer = commentSlice.reducer;
