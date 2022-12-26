import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const showCommentsSlice = createSlice({
  name: "showComments",
  initialState,
  reducers: {
    incrementComment: (state) => {
      state.value = true;
    },
    decrementComment: (state) => {
      state.value = false;
    },
  },
  extraReducers: () => {},
});

export const { incrementComment, decrementComment } = showCommentsSlice.actions

export const showCommentsReducer = showCommentsSlice.reducer;
