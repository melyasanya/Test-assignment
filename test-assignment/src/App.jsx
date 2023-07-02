import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Tweets } from "./pages/Tweets/Tweets";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tweets" element={<Tweets />} />
      <Route path="/*" element={<Navigate to={"/"} />} />
    </Routes>
  );
}

export default App;
