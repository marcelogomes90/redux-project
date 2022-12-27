import { useSelector } from "react-redux";
import { userSelector } from "../../store/slices/users";
import User from "./User";

function UserContainer({ postUserId }) {
  const userContent = useSelector((state) =>
    userSelector.selectById(state, postUserId)
  );

  return <User userContent={userContent} />;
}

export default UserContainer;
