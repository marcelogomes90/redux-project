import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, postSelector } from "../../../store/slices/posts";
import {
  getComments,
  commentSelector,
} from "../../../store/slices/comments.js";
import { getUsers } from "../../../store/slices/users";
import PostList from "./PostList";

function PostListContainer() {
  const dispatch = useDispatch();

  const postsIds = useSelector(postSelector.selectIds);
  const CommentsObject = useSelector(commentSelector.selectAll);

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getComments());
    dispatch(getUsers());
  }, []);

  return <PostList postsIds={postsIds} CommentsObject={CommentsObject} />;
}

export default PostListContainer;
