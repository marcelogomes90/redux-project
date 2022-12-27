import { useCallback } from "react";
import { Button } from "@amigoapp/doca-react";
import { showComment, hideComment } from "../../../store/slices/showComments";
import { useDispatch, useSelector } from "react-redux";
import CommentItem from "./CommentItem";

function CommentItemContainer({ postContent, CommentsObject }) {
  const dispatch = useDispatch();

  const showComments = useSelector((state) => state.showComments.value);

  const onButtonCommentClick = useCallback(() => {
    showComments ? dispatch(hideComment()) : dispatch(showComment());
  }, [showComments]);

  return (
    <>
      <Button
        iconLeft="comment"
        className="doca-mb-5"
        size="small"
        onClick={() => onButtonCommentClick()}
        variant="secondary"
      >
        Comentários
      </Button>
      {CommentsObject.filter((commentObject) => commentObject.postId === postContent.id ).map((commentContent) => (
        <CommentItem key={commentContent.id} commentContent={commentContent} postContent={postContent} showComments={showComments} />
      ))}
    </>
  );
}

export default CommentItemContainer;
