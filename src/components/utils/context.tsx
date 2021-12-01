import React, { useState, useEffect } from "react";

interface TypeGames {
  type: string;
  description: string;
  range: number;
  price: number;
  "max-number": number;
  color: string;
}

export const Context = React.createContext<{
  games: TypeGames[];
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}>({
  games: [],
  isLoggedIn: false,
  setIsLoggedIn: (value: boolean) => {},
});

export const ContextProvider: React.FC<{}> = (props) => {
  const [data, setData] = useState<TypeGames[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetch("./games.json", {
      headers: {
        Accept: "aplications/json",
      },
    })
      .then((response) => response.json())
      .then((response) => setData(response.types));
  }, []);

  const contextValues = {
    games: data,
    isLoggedIn: isLoggedIn,
    setIsLoggedIn: setIsLoggedIn,
  };

  return (
    <Context.Provider value={contextValues}>{props.children}</Context.Provider>
  );
};
