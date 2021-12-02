import React from "react";
import { Game } from "./styled";

const CompleteGame = (props: any) => {
  const { type, data, price, game, color } = props;
  return (
    <React.Fragment>
      <Game key={(Math.random() * 10).toFixed(2)} color={color}>
        <p>{game}</p>
        <p>
          <span>{data}</span> -
          <span>
            {price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </p>
        <p className="type">{type}</p>
      </Game>
    </React.Fragment>
  );
};

export default CompleteGame;
