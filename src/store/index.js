import { configureStore } from "@reduxjs/toolkit";

import { postReducer } from "./posts";
import { commentReducer } from "./comments.js";

export const store = configureStore({
  reducer: {
    posts: postReducer,
    comments: commentReducer,
  },
});
