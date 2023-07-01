import css from "./LowerCard.module.css";
import PropTypes from "prop-types";

export const LowerCard = ({ tweets, follower }) => {
  return (
    <>
      <p className={css.lowerCardTweets}>{tweets} tweets</p>
      <p className={css.lowerCardFollowers}>
        {follower.toLocaleString("en-US")} followers
      </p>
    </>
  );
};

LowerCard.propTypes = {
  tweets: PropTypes.number,
  follower: PropTypes.number,
};
