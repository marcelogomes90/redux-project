import { useCallback } from "react";
import { Button } from "@amigoapp/doca-react";
import { showComment, hideComment } from "../../../store/slices/showComments";
import { useDispatch, useSelector } from "react-redux";
import CommentList from "./CommentList";

function CommentListContainer({ commentsIds, postId }) {
  const dispatch = useDispatch();

  const showComments = useSelector((state) => state.showComments.value);

  const onButtonCommentClick = useCallback(() => {
    showComments ? dispatch(hideComment()) : dispatch(showComment());
  }, [showComments]);

  return (
    <div>
      <Button
        iconLeft="comment"
        className="doca-mb-5"
        size="small"
        onClick={() => onButtonCommentClick()}
        variant="secondary"
      >
        Comentários
      </Button>
      <CommentList
        showComments={showComments}
        postId={postId}
        commentsIds={commentsIds}
      />
    </div>
  )
}

export default CommentListContainer;