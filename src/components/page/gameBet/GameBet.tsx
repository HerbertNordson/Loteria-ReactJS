import { Fragment, useEffect, useState } from "react";
import ButtonFilter from "../../layout/button/buttonFitler";
import ButtonsAct from "../../layout/buttonAct/buttonAct";
import { Card } from "../../layout/card/styled";
import CompleteGame from "../../layout/game/CompleteGame";
import Header from "../../layout/header/Header";
import { TypesCenter, TypesContent } from "./styled";

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
    <Fragment>
      <Header />
      <TypesContent>
        <TypesCenter>
          <h2>New bet for mega-sena</h2>
          <p>Choose a game</p>
          {data.map((types) => {
            return <ButtonFilter name={types.type} color={types.color} />;
          })}
          <p>
            Fill your bet{" "}
            <span>
              Mark as many numbers as you want up to a maximum of 50. Win by
              hitting 15, 16, 17, 18, 19, 20 or none of the 20 numbers drawn.
            </span>
          </p>

          <button className="number">01</button>

          <ButtonsAct />
        </TypesCenter>
        <div className="Cart">
          <Card>
            <h3>Cart</h3>
            <CompleteGame />
            <h3>
              Cart <span>total: R$</span>2,50
            </h3>
            <button>Save</button>
          </Card>
        </div>
      </TypesContent>
    </Fragment>
  );
};

export default GameBet;
