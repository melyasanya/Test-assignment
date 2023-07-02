import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getFollowingIds,
  getNeedToChange,
  getUsers,
} from "../../redux/selectors";
import { changeUser } from "../../services/operations";
import css from "./FollowButton.module.css";

export const FollowButton = ({ handleFollowClick, id, active }) => {
  // const { users } = useSelector(getUsers);
  // const dispatch = useDispatch();
  // const change = useSelector(getNeedToChange);
  const followings = useSelector(getFollowingIds);

  const follow = followings.includes(id);

  return (
    <button
      id={id}
      className={follow ? `${css.followBtn} ${css.active}` : `${css.followBtn}`}
      onClick={(e) => handleFollowClick(id, e)}
    >
      <span className={css.followBtnText}>
        {follow ? "Following" : "Follow"}
      </span>
    </button>
  );
};
