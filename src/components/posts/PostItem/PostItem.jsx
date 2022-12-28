import { Text, Flex, Button, Separator } from "@amigoapp/doca-react";
import CommentListContainer from "../../comments/CommentList/CommentListContainer";
import UserContainer from "../../users/UserContainer";

function PostItem({ CommentsObject, postContent, showComments, onShowCommentsClick }) {
  return (
    <Flex align="start" direction="col" gap={2} key={postContent.title}>
      <Text as="h1" weight="bold" size="large">
        {postContent.title}
      </Text>
      <Text size="small">{postContent.body}</Text>
      <UserContainer postUserId={postContent.userId} />
      <Button
        iconLeft="comment"
        className="doca-mb-3"
        size="small"
        onClick={onShowCommentsClick}
        variant="secondary"
      >
        {!showComments ? "Mostrar Comentários" : "Ocultar Comentários"}
      </Button>
      {showComments && (
        <CommentListContainer
          postContent={postContent}
          CommentsObject={CommentsObject}
        />
      )}
      <Separator />
    </Flex>
  );
}

export default PostItem;
