import CommentItemContainer from "../CommentItem/CommentItemContainer";

function CommentList({ postContent, commentsIds }) {
  return (
    <div>
      {commentsIds?.map((commentId) => (
        <CommentItemContainer
          key={commentId}
          commentId={commentId}
          postContent={postContent}
        />
      ))}
    </div>
  );
}

export default CommentList;
