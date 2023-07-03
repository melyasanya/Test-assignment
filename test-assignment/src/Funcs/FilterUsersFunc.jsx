import { useSelector } from "react-redux";
import { getFollowingIds, getUsers } from "../redux/selectors";

export const useFilterFollowingUsers = () => {
  const users = useSelector(getUsers);
  const followingId = useSelector(getFollowingIds);
  return users.filter((user) => user.includes(followingId));
};

export const useFilterFollowUsers = () => {
  const users = useSelector(getUsers);
  const followingId = useSelector(getFollowingIds);
  return users.filter((user) => !user.includes(followingId));
};
