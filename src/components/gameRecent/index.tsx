import { useRef } from "react";

import { IPropsGame } from "./interface";
import { Game } from "./styles";

const CompleteGame: React.FC<IPropsGame> = (props) => {
  const cartRef = useRef<any>(0);

  const { id, type, data, price, game, color } = props.item;

  return (
    <Game id={id.toString()} key={id} color={color} ref={cartRef}>
      <div className="infos-game">
        <p>{game.toString()}</p>
        <p>
          <span>{data} - </span>
          <span>
            (
            {price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
            )
          </span>
        </p>
        <p className="type">{type}</p>
      </div>
    </Game>
  );
};

export default CompleteGame;
