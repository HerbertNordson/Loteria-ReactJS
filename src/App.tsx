import { useEffect, useState } from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import "./App.css";
import GameBet from "./components/page/gameBet/GameBet";
import Home from "./components/page/home/Home";

const App = () => {
  const [data, setData] = useState<any[]>([]);

  const Auth = useSelector(
    (state: RootStateOrAny) => state.auth.isAuthenticated
  );

  useEffect(() => {
    fetch("./games.json", {
      headers: {
        Accept: "aplications/json",
      },
    })
      .then((response) => response.json())
      .then((response) => setData(response.types));
  }, []);

  return (
    <div className="App">
      {!Auth && <Home />}
      {Auth && <GameBet data={data} />}
      <footer>Copyright 2020 Luby Software</footer>
    </div>
  );
};

export default App;
