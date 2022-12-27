import PostItemContainer from "../PostItem/PostItemContainer";

function PostList({ postsIds, CommentsObject }) {
  return (
    <>
      {postsIds.map((postId) => (
        <PostItemContainer
          key={postId}
          CommentsObject={CommentsObject}
          postId={postId}
        />
      ))}
    </>
  );
}

export default PostList;
