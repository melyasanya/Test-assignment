import { useDispatch, useSelector } from "react-redux";
import { useEffect, useLayoutEffect, useRef } from "react";

import { fetchUsers } from "../../services/operations";
import { getFilterValue, getUsers } from "../../redux/selectors";
import { TwitCardItem } from "../TwitCardItem/TwitCardItem";
import { options } from "../Selector/SelectorOptions";
import { changeFilterValue } from "../../redux/users/usersSlice";

export const TwitCard = ({ followUsers, followingUsers }) => {
  const dispatch = useDispatch();

  const filtValue = useSelector(getFilterValue);
  const { users } = useSelector(getUsers);

  const firstUpdate = useRef(true);

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      dispatch(changeFilterValue(options[0].value));
      dispatch(fetchUsers());
      firstUpdate.current = false;
      return;
    }
  });
  useEffect(() => {}, []);

  return filtValue === options[0].value
    ? users.map((user) => {
        return <TwitCardItem key={user.id} user={user} />;
      })
    : filtValue === options[1].value
    ? followUsers.map((user) => {
        return <TwitCardItem key={user.id} user={user} />;
      })
    : filtValue === options[2].value
    ? followingUsers.map((user) => {
        return <TwitCardItem key={user.id} user={user} />;
      })
    : "";
};
