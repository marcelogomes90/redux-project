import { commentSelector } from "../../../store/slices/comments";
import { useSelector } from "react-redux";
import CommentItem from "./CommentItem";

function CommentItemContainer({ postId, CommentsObject, showComments }) {

  return (
    <>
      {CommentsObject.filter((commentObject) => commentObject.postId === postId).map((commentContent) => (
        <CommentItem key={commentContent.id} commentContent={commentContent} showComments={showComments} postId={postId} />
      ))}
    </>
  );
}

export default CommentItemContainer;
