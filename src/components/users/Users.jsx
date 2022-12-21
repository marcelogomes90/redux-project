import { Text, Flex } from "@amigoapp/doca-react";

function Users({ users, postUserId }) {
  return (
    <>
      {users
        .filter((user) => user.id === postUserId)
        .map((userInfo) => (
          <Flex key={userInfo.name} gap={5} className="doca-mb-4">
            <Text
              variant="gray"
              size="extra-small"
            >{`Autor do Post: ${userInfo.name}`}</Text>
            <Text
              variant="gray"
              size="extra-small"
            >{`Username: ${userInfo.username}`}</Text>
            <Text
              variant="gray"
              size="extra-small"
            >{`E-mail: ${userInfo.email}`}</Text>
            <Text
              variant="gray"
              size="extra-small"
            >{`Website: ${userInfo.website}`}</Text>
            <Text
              variant="gray"
              size="extra-small"
            >{`Telefone: ${userInfo.phone}`}</Text>
          </Flex>
        ))}
    </>
  );
}

export default Users;
