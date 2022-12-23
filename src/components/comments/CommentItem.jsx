import { Text, Flex } from "@amigoapp/doca-react";
import { useSelector } from "react-redux";
import { commentSelector } from "../../store/slices/comments";

function CommentsItem({ commentInfo }) {
  const commentContent = useSelector(state => commentSelector.selectById(state, commentInfo))
  return (
    <>
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
      </Flex>
    </>
  );
}

export default CommentsItem;
