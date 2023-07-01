import { LowerCard } from "../LowerCard/LowerCard";
import { UpperCard } from "../UpperCard/UpperCard";
import css from "./TwitCard.module.css";
import { useSelector } from "react-redux";
import { getUsers } from "../../redux/selectors";
import { FollowButton } from "../FollowButton/FollowButton";

export const TwitCard = () => {
  const { users } = useSelector(getUsers);

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
              <FollowButton />
            </div>
          </li>
        );
      })}
    </ul>
  );
};
