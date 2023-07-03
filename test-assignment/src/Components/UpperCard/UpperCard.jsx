import logo from "../../images/Logo.png";

import css from "./UpperCard.module.css";

export const UpperCard = () => {
  return (
    <div className={css.upperCard}>
      <img src={logo} alt="Logo" className={css.upperCardImage} />
      <div className={css.background}></div>
    </div>
  );
};
