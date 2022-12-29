import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComments, commentSelector } from "../../../store/slices/comments.js";
import CommentList from "./CommentList";

function CommentListContainer({ postContent }) {
  const dispatch = useDispatch();
  const commentsIds = useSelector(commentSelector.selectIds);

  useEffect(() => {
    dispatch(getComments())
  }, []);

  return (
    <>
      <CommentList postContent={postContent} commentsIds={commentsIds} />
    </>
  );
}

export default CommentListContainer;
