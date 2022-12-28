import CommentItem from "./CommentItem";

function CommentItemContainer({ commentContent }) {
  return (
    <>
      <CommentItem commentContent={commentContent} />
    </>
  );
}

export default CommentItemContainer;
