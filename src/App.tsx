import { useEffect, useState } from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import Rota from "./services/rotas";

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
      <BrowserRouter>
        <Rota />
      </BrowserRouter>
      <footer>Copyright 2020 Luby Software</footer>
    </div>
  );
};

export default App;
