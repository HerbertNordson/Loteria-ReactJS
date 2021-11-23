import { Fragment, useContext, useEffect, useState } from "react";
import ButtonFilter from "../../layout/button/buttonFitler";
import ButtonsAct from "../../layout/buttonAct/buttonAct";
import { Card } from "../../layout/card/styled";
import CompleteGame from "../../layout/game/CompleteGame";
import Header from "../../layout/header/Header";
import { TypesCenter, TypesContent } from "./styled";
import { context } from "../../utils/context";

interface GameBetProps {
  name?: string;
  number?: number;
}

interface ContentType {
  type: string;
  description: string;
  range: number;
  price: number;
  "max-number": number;
  color: string;
}

const GameBet = (props: GameBetProps) => {
  const [type, setType] = useState<String>("Lotofácil");
  const [description, setDescription] = useState<String>("");
  const [range, setRange] = useState<Number>(0);
  const [price, setPrice] = useState<Number>(0);
  const [maxNumber, setMaxNumber] = useState<Number>();
  const [color, setColor] = useState<String>("");
  const buttonArray = [];

  const ctxData = useContext(context);

  useEffect(() => {
    ctxData.map((content: ContentType) => {
      if (content.type === type) {
        return ContentTypesHandler(content);
      }
    });
  }, [ContentTypesHandler]);

  function ContentTypesHandler(props: ContentType) {
    setType(props.type);
    setDescription(props.description);
    setRange(props.range);
    setPrice(props.price);
    setMaxNumber(props["max-number"]);
    setColor(props.color);
  }

  for (let i = 1; i <= range; i++) {
    buttonArray.push(
      <button className="number">{i < 10 ? `0${i}` : i}</button>
    );
  }

  let priceFinal: any = 0;

  return (
    <Fragment>
      <Header />
      <TypesContent>
        <TypesCenter>
          <h2>New bet for {type}</h2>
          <p>Choose a game</p>
          {ctxData.map((types, key) => {
            return (
              <ButtonFilter key={key} name={types.type} color={types.color} />
            );
          })}
          <p>
            Fill your bet{" "}
            <span>
              Mark as many numbers as you want up to a maximum of 50. Win by
              hitting 15, 16, 17, 18, 19, 20 or none of the 20 numbers drawn.
            </span>
          </p>

          {buttonArray}

          <ButtonsAct />
        </TypesCenter>
        <div className="Cart">
          <Card>
            <h3>Cart</h3>
            <CompleteGame />
            <h3>
              Cart <span>total: </span>
              {price > 0
                ? (priceFinal = price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }))
                : "R$ 0,00"}
            </h3>
            <button>Save</button>
          </Card>
        </div>
      </TypesContent>
    </Fragment>
  );
};

export default GameBet;
