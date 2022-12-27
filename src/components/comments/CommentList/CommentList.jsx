import CommentItemContainer from "../CommentItem/CommentItemContainer";

function CommentList({ showComments, postId, commentsIds }) {
  return (
    <>
      {commentsIds.map((commentId) => (
        <CommentItemContainer
          key={commentId}
          showComments={showComments}
          postId={postId}
          commentId={commentId}
        />
      ))}
    </>
  );
}

export default CommentList;
