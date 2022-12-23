import { configureStore } from "@reduxjs/toolkit";

import { postReducer } from "./slices/posts.js";
import { commentReducer } from "./slices/comments.js";
import { userReducer } from "./slices/users";

export const store = configureStore({
  reducer: {
    posts: postReducer,
    comments: commentReducer,
    users: userReducer,
  },
});
