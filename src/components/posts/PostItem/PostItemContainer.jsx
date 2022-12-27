import PostItem from "./PostItem";
import { useSelector } from "react-redux";
import { postSelector } from "../../../store/slices/posts";

function PostItemContainer({ postId, CommentsObject }) {
  const postContent = useSelector((state) =>
    postSelector.selectById(state, postId)
  );

  return (
    <div>
      <PostItem
        postId={postId}
        CommentsObject={CommentsObject}
        postContent={postContent}
      />
    </div>
  );
}

export default PostItemContainer;
