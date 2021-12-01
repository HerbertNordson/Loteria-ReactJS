import { RootStateOrAny, useSelector } from "react-redux";
import "./App.css";
import GameBet from "./components/page/gameBet/GameBet";
// import RecentGame from "./components/page/recent/RecentGame";
import Home from "./components/page/home/Home";
import { ContextProvider } from "./components/utils/context";

const App = () => {
  const Auth = useSelector(
    (state: RootStateOrAny) => state.auth.isAuthenticated
  );

  return (
    <div className="App">
      <ContextProvider>
        {!Auth && <Home />}
        {Auth && <GameBet />}
        <footer>Copyright 2020 Luby Software</footer>
      </ContextProvider>
    </div>
  );
};

export default App;
