import { configureStore } from "@reduxjs/toolkit";

import { postReducer } from "./slices/posts.js";
import { commentReducer } from "./slices/comments.js";
import { userReducer } from "./slices/users";
import { showCommentsReducer } from "./slices/showComments.js";

export const store = configureStore({
  reducer: {
    posts: postReducer,
    comments: commentReducer,
    users: userReducer,
    showComments: showCommentsReducer,
  },
});
