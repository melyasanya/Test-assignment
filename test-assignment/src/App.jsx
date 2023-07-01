import css from "./App.module.css";
import { TwitCard } from "./Components/TwitCard/TwitCard";

function App() {
  return (
    <div className={css.container}>
      <TwitCard />
    </div>
  );
}

export default App;
