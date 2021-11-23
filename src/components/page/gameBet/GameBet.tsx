import { useEffect, useState } from "react";
import ButtonFilter from "../../layout/button/buttonFitler";

interface GameBetProps {
  name?: string;
  number?: number;
}

interface TypeGames {
  type: string;
  description: string;
  range: number;
  price: number;
  "max-number": number;
  color: string;
}

const GameBet = (props: GameBetProps) => {
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

  return (
    <>
      {data.map((types) => {
        return <ButtonFilter name={types.type} color={types.color} />;
      })}
    </>
  );
};

export default GameBet;
