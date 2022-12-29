import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, postSelector } from "../../../store/slices/posts";
import { getUsers } from "../../../store/slices/users";
import PostList from "./PostList";

function PostListContainer() {
  const dispatch = useDispatch();
  const postsIds = useSelector(postSelector.selectIds);

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getUsers());
  }, []);

  return <PostList postsIds={postsIds} />;
}

export default PostListContainer;
