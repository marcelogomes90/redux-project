import { Flex, Text, Button, Separator } from "@amigoapp/doca-react";
import Users from "../users/Users";
import Comments from "../comments/Comments";

function Posts({ posts, onButtonClick, comments, postId, commentsShow, users }) {
  return (
    <>
      {posts.map((post) => (
        <Flex align="start" direction="col" gap={2} key={post.id}>
          <Text as="h1" weight="bold" size="large">
            {post.title}
          </Text>
          <Text size="small">{post.body}</Text>
          <Users
            users={users}
            postUserId={post.userId}
          />
          <Button
            block
            className="doca-mb-2"
            size="small"
            onClick={(id) => onButtonClick(post.id)}
            variant="secondary"
          >
            Comentários
          </Button>
          {commentsShow && post.id === postId ? (
            <Comments postId={postId} comments={comments} />
          ) : null}
          <Separator />
        </Flex>
      ))}
    </>
  );
}

export default Posts;
