import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import {
  getFilteredUsers,
  getFollowingIds,
  getUsers,
} from "../../redux/selectors";
import { changeFilterValue, filterUsers } from "../../redux/users/usersSlice";
import { compareUsers } from "./CompareFunc";
import { options } from "./SelectorOptions";

export const Selector = () => {
  const { users } = useSelector(getUsers);
  const followId = useSelector(getFollowingIds);
  const filterUsersArray = useSelector(getFilteredUsers);
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    console.log("hi");
    if (e.value === options[0].value) {
      dispatch(changeFilterValue(e.value));
      dispatch(filterUsers(users));
    } else if (e.value === options[2].value) {
      dispatch(changeFilterValue(e.value));
      const followingUsers = compareUsers(users, followId, e.value);
      dispatch(filterUsers(followingUsers));
    } else if (e.value === options[1].value) {
      dispatch(changeFilterValue(e.value));
      const followUsers = compareUsers(users, followId, e.value);
      dispatch(filterUsers(followUsers));
    }
  };

  return (
    <Select
      options={options}
      defaultValue={options[0]}
      onChange={handleOnChange}
    />
  );
};
