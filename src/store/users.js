import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  loading: false,
};

export const getUsers = createAsyncThunk("users/getUsers", async (thunkAPI) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users").then
    ((data) => data.json()
  );
  return res;
});

const usersAdapter = createEntityAdapter({
  selectId: (users) => users.id,
});

export const userSlice = createSlice({
  name: "users",
  initialState: usersAdapter.getInitialState({ loading: false }),
  reducers: {},
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.loading = true;
    },
    [getUsers.fulfilled]: (state, { payload }) => {
      state.loading = false;
      usersAdapter.setAll(state, payload);
    },
    [getUsers.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const userSelector = usersAdapter.getSelectors((state) => state.users);

export const userReducer = userSlice.reducer;