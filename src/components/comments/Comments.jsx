import { Flex, Text } from "@amigoapp/doca-react";

function Comments({ comments, postId }) {
  return (
    <>
      {comments.filter((comment) => comment.postId === postId).map((commentInfos) => (
        <Flex
          key={commentInfos.name}
          align="start"
          direction="col"
          gap={1}
          className="doca-mb-4"
        >
          <Text size="extra-small">{`Comentário: ${commentInfos.body}`}</Text>
          <Text size="extra-small">{`Nome: ${commentInfos.name}`}</Text>
          <Text size="extra-small">{`E-mail: ${commentInfos.email}`}</Text>
        </Flex>
      ))}
    </>
  );
}

export default Comments;
