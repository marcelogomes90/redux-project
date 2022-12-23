import PostItem from "./PostItem";

function Posts({ posts, onButtonClick, comments, postId, commentsShow, users }) {
  return (
    <>
      {posts.map((post) => (
        <PostItem
          key={post}
          post={post}
          onButtonClick={onButtonClick}
          comments={comments}
          postId={postId}
          commentsShow={commentsShow}
          users={users}
        />
      ))}
    </>
  );
}

export default Posts;
