import CommentItem from "./CommentItem";
import { useSelector } from "react-redux";
import { commentSelector } from "../../../store/slices/comments";

function CommentItemContainer({ commentId, postContent }) {
  const commentContent = useSelector((state) =>
    commentSelector.selectById(state, commentId)
  );

  return (
    <>
      { commentContent.postId === postContent.id ?
        <CommentItem commentContent={commentContent} />
        : null
      }
    </>
  );
}

export default CommentItemContainer;
