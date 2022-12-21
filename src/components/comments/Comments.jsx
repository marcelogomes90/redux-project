import { Text, Flex } from "@amigoapp/doca-react";

function Comments({ comments, postId }) {

  return (
    <>
      {comments.filter(comment => comment.postId === postId).map(infos => (
        <Flex
          key={infos.name}
          align="start"
          direction="col"
          gap={1}
          className="doca-mb-4"
        >
          <Text size="extra-small">{`Comentário: ${infos.body}`}</Text>
          <Text size="extra-small">{`Nome: ${infos.name}`}</Text>
          <Text size="extra-small">{`E-mail: ${infos.email}`}</Text>
        </Flex>
      ))}
    </>
  )
}

export default Comments;