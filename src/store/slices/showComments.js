import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const showCommentsSlice = createSlice({
  name: "showComments",
  initialState,
  reducers: {
    showComment: (state) => {
      state.value = true;
    },
    hideComment: (state) => {
      state.value = false;
    },
  },
  extraReducers: () => {},
});

export const { showComment, hideComment } = showCommentsSlice.actions

export const showCommentsReducer = showCommentsSlice.reducer;
