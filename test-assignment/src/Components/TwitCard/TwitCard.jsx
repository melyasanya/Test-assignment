import { LowerCard } from "../LowerCard/LowerCard";
import { UpperCard } from "../UpperCard/UpperCard";
import css from "./TwitCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getFollowingIds,
  getNeedToChange,
  getUsers,
} from "../../redux/selectors";
import { FollowButton } from "../FollowButton/FollowButton";

import { changeUser } from "../../services/operations";
import { changeUserFollowers } from "../../redux/users/usersSlice";
import { useEffect, useRef, useState } from "react";

export const TwitCard = () => {
  const [isActive, setIsActive] = useState(false);
  const [toChangeId, setToChangeId] = useState(0);
  const { users } = useSelector(getUsers);
  const dispatch = useDispatch();
  const change = useSelector(getNeedToChange);
  const count = useRef(null);
  //

  const handleFollowClick = (id, e) => {
    dispatch(changeUserFollowers(id));
    setToChangeId(id);
    count.current = 1;
    // setIsActive(true);
    console.log(e.currentTarget.id);
    console.log(id);
    // if (e.currentTarget.id === id) {
    //   const btn = document.querySelector(`button[data-id = '${id}']`);
    //   console.log(btn);
    //   btn.classList.add("active");
    // }
  };
  useEffect(() => {
    count.current && dispatch(changeUser({ data: change, id: toChangeId }));
  }, [change]);

  return (
    <ul className={css.twitCardList}>
      {users.map((user) => {
        return (
          <li key={user.id}>
            <UpperCard />
            <span className={css.bottomLine}>
              <div className={css.div}>
                <img
                  src={user.avatar}
                  alt="Avatar"
                  className={css.avatarBorder}
                />
              </div>
            </span>
            <div className={css.lowerCard}>
              <LowerCard tweets={user.tweets} follower={user.follower} />
              <FollowButton
                handleFollowClick={handleFollowClick}
                id={user.id}
                active={isActive}
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
};
