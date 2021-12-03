import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { cartActcion } from "../../../store/cart";
import { Game } from "./styled";
const CompleteGame = (props: any) => {
  const dispatch = useDispatch();
  const { id, type, data, price, game, color } = props.item;

  const cartRef = useRef<any>(0);

  const excludeHandler = (ev: any) => {
    ev.preventDefault();
    dispatch(cartActcion.removeItemToCart(cartRef.current.id));
  };

  return (
    <Game id={id} key={id} color={color} ref={cartRef}>
      <button type="button" onClick={excludeHandler}></button>
      <div className="infos-game">
        <p>{game.toString()}</p>
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
      </div>
    </Game>
  );
};

export default CompleteGame;
