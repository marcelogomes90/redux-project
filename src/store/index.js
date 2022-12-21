import { configureStore } from "@reduxjs/toolkit";

import { postReducer } from "./posts";
import { commentReducer } from "./comments.js";
import { userReducer } from "./users";

export const store = configureStore({
  reducer: {
    posts: postReducer,
    comments: commentReducer,
    users: userReducer,
  },
});
