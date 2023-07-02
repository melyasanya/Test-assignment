import { LowerCard } from "../LowerCard/LowerCard";
import { UpperCard } from "../UpperCard/UpperCard";
import css from "./TwitCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getNeedToChange, getUsers } from "../../redux/selectors";
import { FollowButton } from "../FollowButton/FollowButton";

import { changeUser, fetchUsers } from "../../services/operations";
import { changeUserFollowers } from "../../redux/users/usersSlice";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

export const TwitCard = () => {
  const [toChangeId, setToChangeId] = useState(0);
  const { users } = useSelector(getUsers);
  const dispatch = useDispatch();
  const change = useSelector(getNeedToChange);
  const countForFollow = useRef(null);
  const firstUpdate = useRef(true);

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      dispatch(fetchUsers());
      firstUpdate.current = false;
      return;
    }
  });

  const handleFollowClick = (id) => {
    dispatch(changeUserFollowers(id));
    setToChangeId(id);
    countForFollow.current = 1;
  };
  useEffect(() => {
    countForFollow.current &&
      dispatch(changeUser({ data: change, id: toChangeId }));
  }, [change, dispatch, toChangeId]);

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
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
};
