import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import { getNeedToChange } from "../../redux/selectors";
import { changeUserFollowers } from "../../redux/users/usersSlice";
import { changeUser } from "../../services/operations";
import { FollowButton } from "../FollowButton/FollowButton";
import { LowerCard } from "../LowerCard/LowerCard";
import { UpperCard } from "../UpperCard/UpperCard";

import css from "./TwitCardItem.module.css";

export const TwitCardItem = ({ user }) => {
  const dispatch = useDispatch();

  const [toChangeId, setToChangeId] = useState(0);

  const change = useSelector(getNeedToChange);

  const countForFollow = useRef(null);

  useEffect(() => {
    countForFollow.current &&
      dispatch(changeUser({ data: change, id: toChangeId }));
  }, [change, dispatch, toChangeId]);

  const handleFollowClick = (id) => {
    dispatch(changeUserFollowers(id));
    setToChangeId(id);
    countForFollow.current = 1;
  };

  return (
    <li key={user.id}>
      <UpperCard />
      <span className={css.bottomLine}>
        <div className={css.div}>
          <img src={user.avatar} alt="Avatar" className={css.avatarBorder} />
        </div>
      </span>
      <div className={css.lowerCard}>
        <LowerCard tweets={user.tweets} follower={user.follower} />
        <FollowButton handleFollowClick={handleFollowClick} id={user.id} />
      </div>
    </li>
  );
};

TwitCardItem.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    avatar: PropTypes.string,
    tweets: PropTypes.number,
    follower: PropTypes.number,
  }),
};
