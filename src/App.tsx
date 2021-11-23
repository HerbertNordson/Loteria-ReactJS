import "./App.css";
import GameBet from "./components/page/gameBet/GameBet";
import { ContextProvider } from "./components/utils/context";
// import RecentGame from "./components/page/recent/RecentGame";
// import Home from "./components/page/home/Home";

const App = () => {
  return (
    <div className="App">
      <ContextProvider>
        <GameBet />
        <footer>Copyright 2020 Luby Software</footer>
      </ContextProvider>
    </div>
  );
};

export default App;
