import { Text, Flex } from "@amigoapp/doca-react";
import CommentListContainer from "../../comments/CommentList/CommentListContainer";
import UserContainer from "../../users/UserContainer";

function PostItem({ postId, CommentsObject, postContent }) {
  return (
    <Flex align="start" direction="col" gap={2} key={postContent.title}>
      <Text as="h1" weight="bold" size="large">
        {postContent.title}
      </Text>
      <Text size="small">{postContent.body}</Text>
      <UserContainer postUserId={postContent.userId} />
      <CommentListContainer postId={postId} CommentsObject={CommentsObject} />
    </Flex>
  );
}

export default PostItem;
