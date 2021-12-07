import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { cartActcion, betActions } from "../../store/";

import { IPropsGame, ITotal } from "./interface";
import { Game } from "./styles";

const CompleteGame: React.FC<IPropsGame> = (props) => {
  const dispatch = useDispatch();
  const cartRef = useRef<any>(0);
  const itemsCart = useSelector((state: ITotal) => state.cart.totalQuantity);

  const { id, type, data, price, game, color } = props.item;

  const excludeHandler = () => {
    if (itemsCart <= 1) {
      dispatch(betActions.removeToggle());
    }
    dispatch(cartActcion.removeItemToCart(cartRef.current.id));
  };

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
