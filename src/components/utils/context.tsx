import React, { createContext, useState, useEffect, ReactNode } from "react";

interface TypeGames {
  type: string;
  description: string;
  range: number;
  price: number;
  "max-number": number;
  color: string;
}

interface ContextProviderProps {
  children: ReactNode;
}

export const context = createContext<TypeGames[]>([]);

export function ContextProvider(props: ContextProviderProps) {
  const [data, setData] = useState<TypeGames[]>([]);

  useEffect(() => {
    fetch("./games.json", {
      headers: {
        Accept: "aplications/json",
      },
    })
      .then((response) => response.json())
      .then((response) => setData(response.types));
  }, []);

  return <context.Provider value={data}>{props.children}</context.Provider>;
}
