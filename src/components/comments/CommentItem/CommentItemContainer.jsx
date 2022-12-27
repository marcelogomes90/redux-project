import { commentSelector } from "../../../store/slices/comments";
import { useSelector } from "react-redux";
import CommentItem from "./CommentItem";

function CommentItemContainer({ postId, commentId, showComments }) {
  const commentContent = useSelector(state => commentSelector.selectById(state, commentId));

  return (
    <>
      {commentContent.postId === postId && showComments ?
        <CommentItem
          key={commentContent.id}
          commentContent={commentContent}
        /> :
        null
      }
    </>
  )
}

export default CommentItemContainer;