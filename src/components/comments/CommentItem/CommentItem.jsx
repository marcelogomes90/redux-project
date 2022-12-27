import { Flex, Text } from "@amigoapp/doca-react";

function CommentItem({ commentContent, showComments, selectedPostId }) {
  return (
    <>
      { showComments ?
        <Flex
          key={commentContent.name}
          align="start"
          direction="col"
          gap={1}
          className="doca-mb-4"
        >
          <Text size="extra-small">{`Comentário: ${commentContent.body}`}</Text>
          <Text size="extra-small">{`Nome: ${commentContent.name}`}</Text>
          <Text size="extra-small">{`E-mail: ${commentContent.email}`}</Text>
        </Flex> : null
      }
    </>
  );
}

export default CommentItem;
