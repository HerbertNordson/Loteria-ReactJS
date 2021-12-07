import { useEffect, useState } from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import Rota from "./services/rotas";

const App = () => {
  const Auth = useSelector(
    (state: RootStateOrAny) => state.auth.isAuthenticated
  );
  const [data, setData] = useState<[{}]>([{}]);

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
        <Rota data={data} />
      </BrowserRouter>
      <footer>Copyright 2020 Luby Software</footer>
    </div>
  );
};

export default App;
