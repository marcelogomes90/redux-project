import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const postIdSlice = createSlice({
  name: "postId",
  initialState,
  reducers: {
    changePostId: (state, action) => {
      state.value = action.payload;
    },
  },
  extraReducers: () => {},
});

export const { changePostId } = postIdSlice.actions;

export const postIdReducer = postIdSlice.reducer;