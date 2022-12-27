import PostItemContainer from "../PostItem/PostItemContainer";

function PostList({ postsIds, commentsIds }) {
  return (
    <>
      {postsIds.map((postId) => (
        <PostItemContainer
          key={postId}
          commentsIds={commentsIds}
          postId={postId}
        />
      ))}
    </>
  );
}

export default PostList;
