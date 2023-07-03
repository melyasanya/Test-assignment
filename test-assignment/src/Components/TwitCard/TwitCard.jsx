import css from "./TwitCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getFilteredUsers,
  getFilterValue,
  getFollowingIds,
  getUsers,
} from "../../redux/selectors";

import { fetchUsers } from "../../services/operations";

import { useEffect, useLayoutEffect, useRef } from "react";
import { TwitCardItem } from "../TwitCardItem/TwitCardItem";
import { options } from "../Selector/SelectorOptions";
import { changeFilterValue } from "../../redux/users/usersSlice";
import {
  useFilterFollowingUsers,
  useFilterFollowUsers,
} from "../../Funcs/FilterUsersFunc";

export const TwitCard = ({ followUsers, followingUsers }) => {
  const filteredUsers = useSelector(getFilteredUsers);
  const { users } = useSelector(getUsers);
  const dispatch = useDispatch();
  const filtValue = useSelector(getFilterValue);
  const firstUpdate = useRef(true);
  const followingId = useSelector(getFollowingIds);

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
