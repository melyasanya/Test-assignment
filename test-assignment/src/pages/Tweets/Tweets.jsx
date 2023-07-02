import { useDispatch, useSelector } from "react-redux";

import css from "./Tweets.module.css";
import { TwitCard } from "../../Components/TwitCard/TwitCard";
import { getUsers } from "../../redux/selectors";
import { axiosLink, fetchUsers } from "../../services/operations";
import { Link } from "react-router-dom";

export const Tweets = () => {
  const dispatch = useDispatch();
  const { users } = useSelector(getUsers);

  const handleLoadMore = () => {
    axiosLink.defaults.params.page += 1;
    dispatch(fetchUsers());
  };

  return (
    <div className={css.container}>
      <button>
        <Link to={"/"}>Back to home page</Link>
      </button>
      {users && <TwitCard />}
      {users.length % axiosLink.defaults.params.page === 0 && (
        <button onClick={handleLoadMore}>Load More</button>
      )}
    </div>
  );
};
