import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { emptyUsers } from "../../redux/users/usersSlice";

export const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(emptyUsers());
  }, [dispatch]);

  return (
    <>
      <h1>This is Home page</h1>

      <Link to={"/tweets"}>
        <button>Go to your tweets</button>{" "}
      </Link>
    </>
  );
};
