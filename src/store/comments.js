import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
  loading: false,
};

export const getComments = createAsyncThunk("comments/getComments", async (thunkAPI) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments").then
    ((data) => data.json()
  );
  return res;
});

export const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    [getComments.pending]: (state) => {
      state.loading = true;
    },
    [getComments.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.comments = payload;
    },
    [getComments.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const commentReducer = commentSlice.reducer;
