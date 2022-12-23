import UserItem from "./UserItem";

function Users({ users, postUserId }) {
  return (
    <>
      {users.filter((user) => user === postUserId).map((userInfo) => (
        <UserItem
          userInfo={userInfo}
        />
      ))}
    </>
  );
}

export default Users;
