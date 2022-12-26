import { useId } from "react";
import UserItem from "./UserItem";

function Users({ users, postUserId }) {
  const id = useId();

  return (
    <>
      {users.filter((user) => user === postUserId).map((userInfo) => (
        <UserItem
          key={id}
          userInfo={userInfo}
        />
      ))}
    </>
  );
}

export default Users;
