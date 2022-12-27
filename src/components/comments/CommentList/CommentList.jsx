import CommentItemContainer from "../CommentItem/CommentItemContainer";

function CommentList({ showComments, postId, CommentsObject }) {
  return (
    <>
      <CommentItemContainer
        showComments={showComments}
        postId={postId}
        CommentsObject={CommentsObject}
      />
    </>
  );
}

export default CommentList;
