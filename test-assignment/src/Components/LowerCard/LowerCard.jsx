import { FollowButton } from "../FollowButton/FollowButton";
import css from "./LowerCard.module.css";

export const LowerCard = () => {
  return (
    <div className={css.lowerCard}>
      {/* <img src="" alt="" className={css.lowerCardImage} /> */}
      <p className={css.lowerCardTweets}>777 tweets</p>
      <p className={css.lowerCardFollowers}>100,500 followers</p>
      <FollowButton />
    </div>
  );
};
