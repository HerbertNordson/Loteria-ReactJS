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
      <button type="button" onClick={excludeHandler}>
        <img
          src="https://cdn.icon-icons.com/icons2/1489/PNG/512/rubbishbin_102620.png"
          alt=""
        />
      </button>
      <div className="infos-game">
        <p>{game.toString()}</p>
        <p className="type">
          {type}{" "}
          <span>
            {price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </p>
      </div>
    </Game>
  );
};

export default CompleteGame;
