import CommentItemContainer from "../CommentItem/CommentItemContainer";

function CommentList({ postContent, CommentsObject }) {
  return (
    <>
      {CommentsObject.filter((commentObject) => commentObject.postId === postContent.id).map((commentContent) => (
        <CommentItemContainer
          key={commentContent.id}
          commentContent={commentContent}
        />
      ))}
    </>
  );
}

export default CommentList;
