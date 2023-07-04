import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { Loader } from "./Components/Loader/Loader";

import { Home } from "./pages/Home/Home";
import { Tweets } from "./pages/Tweets/Tweets";
import { getLoadingState } from "./redux/selectors";

function App() {
  const load = useSelector(getLoadingState);

  return (
    <>
      {load && <Loader />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
}

export default App;
