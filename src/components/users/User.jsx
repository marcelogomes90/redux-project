import { Flex, Text } from "@amigoapp/doca-react";

function User({ userContent }) {
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

export default User;
