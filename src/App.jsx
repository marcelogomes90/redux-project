import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./store/posts";
import { getComments } from "./store/comments.js";
import Posts from "./components/posts/Posts";

function App() {
  const [commentsShow, setCommentsShow] = useState(false);
  const [postId, setPostId] = useState("");

  const dispatch = useDispatch();

  const { posts } = useSelector((state) => state.posts);
  const { comments } = useSelector((state) => state.comments);

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getComments());
  }, []);

  const onButtonClick = useCallback(
    (id) => {
      commentsShow && id === postId
        ? setCommentsShow(false)
        : setCommentsShow(true);
      setPostId(id);
    },
    [postId, commentsShow]
  );

  return (
    <div className="doca-m-8">
      <Posts
        posts={posts}
        onButtonClick={onButtonClick}
        postId={postId}
        comments={comments}
        commentsShow={commentsShow}
      />
    </div>
  );
}

export default App;
