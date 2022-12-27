import CommentItemContainer from "../CommentItem/CommentItemContainer";

function CommentList({ postContent, CommentsObject }) {
  return (
    <>
      <CommentItemContainer
        postContent={postContent}
        CommentsObject={CommentsObject}
      />
    </>
  );
}

export default CommentList;
