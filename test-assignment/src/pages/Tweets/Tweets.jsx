import { useDispatch, useSelector } from "react-redux";

import css from "./Tweets.module.css";
import { TwitCard } from "../../Components/TwitCard/TwitCard";
import {
  getFilteredUsers,
  getFilterValue,
  getFollowingIds,
  getUsers,
} from "../../redux/selectors";
import { axiosLink, fetchUsers } from "../../services/operations";
import { Link } from "react-router-dom";
import { Selector } from "../../Components/Selector/Selector";
import { useEffect, useState } from "react";
import { compareUsers } from "../../Components/Selector/CompareFunc";
import { options } from "../../Components/Selector/SelectorOptions";

export const Tweets = () => {
  const dispatch = useDispatch();
  const { users } = useSelector(getUsers);
  const currentOptions = useSelector(getFilterValue);
  const filteredUsers = useSelector(getFilteredUsers);
  const followingId = useSelector(getFollowingIds);
  const [followUsers, setFollowUsers] = useState([]);
  const [followingUsers, setFollowingUsers] = useState([]);

  useEffect(() => {
    if (currentOptions === options[1].value) {
      setFollowUsers(compareUsers(users, followingId, currentOptions));
    }
    if (currentOptions === options[2].value) {
      setFollowingUsers(compareUsers(users, followingId, currentOptions));
    }
    if (currentOptions === options[0].value) {
      return;
    }
  }, [followingId, users, currentOptions]);

  // useEffect(() => {
  //   setFollowingUsers(users.filter((user) => user.includes(followingId)));
  // }, [followingId, users]);

  const handleLoadMore = () => {
    axiosLink.defaults.params.page += 1;
    dispatch(fetchUsers());
  };

  return (
    <div className={css.container}>
      <button className={css.homeBtn}>
        <Link to={"/"}>Back to home page</Link>
      </button>
      {users && <Selector />}
      {users && (
        <ul className={css.twitCardList}>
          <TwitCard followUsers={followUsers} followingUsers={followingUsers} />
        </ul>
      )}
      {users.length % axiosLink.defaults.params.page === 0 && (
        <button onClick={handleLoadMore}>Load More</button>
      )}
    </div>
  );
};
