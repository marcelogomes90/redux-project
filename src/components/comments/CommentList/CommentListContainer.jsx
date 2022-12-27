import CommentList from "./CommentList";

function CommentListContainer({ CommentsObject, postContent }) {
  return (
    <div>
      <CommentList
        postContent={postContent}
        CommentsObject={CommentsObject}
      />
    </div>
  );
}

export default CommentListContainer;
