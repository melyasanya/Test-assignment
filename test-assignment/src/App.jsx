import { useDispatch, useSelector } from "react-redux";
import css from "./App.module.css";
import { TwitCard } from "./Components/TwitCard/TwitCard";
import { getUsers } from "./redux/selectors";

import { axiosLink, fetchUsers } from "./services/operations";

function App() {
  const dispatch = useDispatch();
  const { users } = useSelector(getUsers);

  const handleClick = () => {
    dispatch(fetchUsers());
  };
  const handleLoadMore = () => {
    axiosLink.defaults.params.page += 1;
    dispatch(fetchUsers());
  };

  return (
    <div className={css.container}>
      <button onClick={() => handleClick()}>Click me</button>
      {users && <TwitCard />}
      {users.length % axiosLink.defaults.params.page === 0 && (
        <button onClick={handleLoadMore}>Load More</button>
      )}
    </div>
  );
}

export default App;
