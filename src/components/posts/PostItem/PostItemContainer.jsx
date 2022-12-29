import PostItem from "./PostItem";
import { useSelector } from "react-redux";
import { postSelector } from "../../../store/slices/posts";
import { useCallback, useState } from "react";

function PostItemContainer({ postId }) {
  const [showComments, setShowComments] = useState(false);

  const postContent = useSelector((state) =>
    postSelector.selectById(state, postId)
  );

  const onShowCommentsClick = useCallback(() => {
    setShowComments((currentValue) => !currentValue);
  }, []);

  return (
    <div>
      <PostItem
        showComments={showComments}
        postContent={postContent}
        onShowCommentsClick={onShowCommentsClick}
      />
    </div>
  );
}

export default PostItemContainer;
