import PostItem from "./PostItem";
import { useSelector } from "react-redux";
import { postSelector } from "../../../store/slices/posts";

function PostItemContainer({ postId, commentsIds }) {
  const postContent = useSelector(state => postSelector.selectById(state, postId));

  return (
    <div>
      <PostItem
        postId={postId}
        commentsIds={commentsIds}
        postContent={postContent}
      />
    </div>
  );
};

export default PostItemContainer;