import { useSelector } from "react-redux";
import { getFollowingIds } from "../../redux/selectors";
import PropTypes from "prop-types";
import css from "./FollowButton.module.css";

export const FollowButton = ({ handleFollowClick, id }) => {
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

FollowButton.propTypes = {
  handleFollowClick: PropTypes.func,
  id: PropTypes.string,
};
