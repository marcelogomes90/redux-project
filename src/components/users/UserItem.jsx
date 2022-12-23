import { Text, Flex } from "@amigoapp/doca-react";
import { useSelector } from "react-redux";
import { userSelector } from "../../store/slices/users";

function UserItem({ userInfo }) {
  const userContent = useSelector(state => userSelector.selectById(state, userInfo));

  return (
    <>
      <Flex gap={5} className="doca-mb-4">
        <Text
          variant="gray"
          size="extra-small"
        >{`Autor do Post: ${userContent.name}`}</Text>
        <Text
          variant="gray"
          size="extra-small"
        >{`Username: ${userContent.username}`}</Text>
        <Text
          variant="gray"
          size="extra-small"
        >{`E-mail: ${userContent.email}`}</Text>
        <Text
          variant="gray"
          size="extra-small"
        >{`Website: ${userContent.website}`}</Text>
        <Text
          variant="gray"
          size="extra-small"
        >{`Telefone: ${userContent.phone}`}</Text>
      </Flex>
    </>
  );
}

export default UserItem;
