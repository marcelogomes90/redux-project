import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, postSelector } from "./store/slices/posts";
import { getComments, commentSelector } from "./store/slices/comments.js";
import { getUsers, userSelector } from "./store/slices/users";
import { incrementComment, decrementComment } from "./store/slices/showComments";
import { changePostId } from "./store/slices/postId";
import Posts from "./components/posts/Posts";

function App() {
  const dispatch = useDispatch();

  const posts = useSelector(postSelector.selectIds);
  const comments = useSelector(commentSelector.selectAll);
  const users = useSelector(userSelector.selectIds);
  const commentsShow = useSelector((state) => state.showComments.value);
  const postId = useSelector((state) => state.postId.value);

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getComments());
    dispatch(getUsers());
  }, []);

  const onButtonClick = useCallback((id) => {
    commentsShow && id === postId ? dispatch(decrementComment()) : dispatch(incrementComment());
    dispatch(changePostId(id));
  }, [postId, commentsShow]);

  return (
    <div className="doca-m-8">
      <Posts
        posts={posts}
        users={users}
        onButtonClick={onButtonClick}
        postId={postId}
        comments={comments}
        commentsShow={commentsShow}
      />
    </div>
  );
}

export default App;
