import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./App.css";
import Rota from "./services/rotas";

const App = () => {
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
      <ToastContainer autoClose={8000} />
      <BrowserRouter>
        <Rota data={data} />
      </BrowserRouter>
      <footer>Copyright 2020 Luby Software</footer>
    </div>
  );
};

export default App;
