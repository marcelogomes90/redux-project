import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const selectedPostIdSlice = createSlice({
  name: "selectedPostId",
  initialState,
  reducers: {
    changeselectedPostId: (state, action) => {
      state.value = action.payload;
    },
  },
  extraReducers: () => {},
});

export const { changeselectedPostId } = selectedPostIdSlice.actions;

export const selectedPostIdReducer = selectedPostIdSlice.reducer;