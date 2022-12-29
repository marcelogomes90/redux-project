import PostItemContainer from "../PostItem/PostItemContainer";

function PostList({ postsIds }) {
  return (
    <>
      {postsIds.map((postId) => (
        <PostItemContainer
          key={postId}
          postId={postId}
        />
      ))}
    </>
  );
}

export default PostList;
