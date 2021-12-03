import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActcion } from "../../../store/cart";
import { betActions } from "../../../store/gameBet";
import { Game } from "./styled";

const CompleteGame = (props: any) => {
  const dispatch = useDispatch();
  const cartRef = useRef<any>(0);
  const itemsCart = useSelector((state: any) => state.cart.totalQuantity);

  const { id, type, data, price, game, color } = props.item;

  const excludeHandler = () => {
    if (itemsCart <= 1) {
      dispatch(betActions.removeToggle());
    }
    dispatch(cartActcion.removeItemToCart(cartRef.current.id));
  };

  return (
    <Game id={id} key={id} color={color} ref={cartRef}>
      <button type="button" onClick={excludeHandler}>
        <img
          src="https://cdn.icon-icons.com/icons2/1489/PNG/512/rubbishbin_102620.png"
          alt=""
        />
      </button>
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
