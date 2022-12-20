import { Text, Flex } from "@amigoapp/doca-react";

function Comments({ coments, postId }) {

  return (
    <>
      {coments.filter(comment => comment.postId === postId).map(info => (
        <Flex
          key={info.name}
          align="start"
          direction="col"
          gap={1}
          className="doca-mb-4"
        >
          <Text size="extra-small">{`Comentário: ${info.body}`}</Text>
          <Text size="extra-small">{`Nome: ${info.name}`}</Text>
          <Text size="extra-small">{`E-mail: ${info.email}`}</Text>
        </Flex>
      ))}
    </>
  )
}

export default Comments