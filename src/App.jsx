import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./store/posts";
import { getComments } from "./store/comments.js";
import { getUsers } from "./store/users";
import Posts from "./components/posts/Posts";

function App() {
  const [commentsShow, setCommentsShow] = useState(false);
  const [postId, setPostId] = useState("");

  const dispatch = useDispatch();

  const { posts } = useSelector((state) => state.posts);
  const { comments } = useSelector((state) => state.comments);
  const { users } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getComments());
    dispatch(getUsers());
  }, []);

  const onButtonClick = useCallback((id) => {
    commentsShow && id === postId ? setCommentsShow(false) : setCommentsShow(true);
    setPostId(id);
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
