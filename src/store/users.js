import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  loading: false,
};

export const getUsers = createAsyncThunk("posts/getUsers", async (thunkAPI) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users").then
    ((data) => data.json()
  );
  return res;
});

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.loading = true;
    },
    [getUsers.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.users = payload;
    },
    [getUsers.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const userReducer = userSlice.reducer;