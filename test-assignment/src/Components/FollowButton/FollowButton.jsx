import css from "./FollowButton.module.css";

export const FollowButton = () => {
  return (
    <button className={css.followBtn}>
      <span className={css.followBtnText}>Follow</span>
    </button>
  );
};
