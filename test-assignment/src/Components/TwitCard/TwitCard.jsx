import { LowerCard } from "../LowerCard/LowerCard";
import { UpperCard } from "../UpperCard/UpperCard";
import css from "./TwitCard.module.css";
import avatarBorder from "../../images/Avatar_border.png";

export const TwitCard = () => {
  return (
    <div>
      <UpperCard />
      <span className={css.bottomLine}>
        <img src={avatarBorder} alt="" className={css.avatarBorder} />
      </span>
      <LowerCard />
    </div>
  );
};
