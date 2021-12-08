import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { Game } from "../index";
import { cartActcion, saveCartItems, betActions } from "@reduxStore";

import { CartItems } from "./styles";
import { Card } from "../card/styles";
import "react-toastify/dist/ReactToastify.css";

import { IPropsBet, IPropsItem } from "./interface";

interface IPropCart {
  cartItems: any;
}

const Cart: React.FC<IPropCart> = (props) => {
  const dispatch = useDispatch();
  const toggleItem = useSelector((state: IPropsBet) => state.gameBet.itemCart);
  let finalPrice: number = 0;

  const onHandlerSave = () => {
    if (props.cartItems.length > 0) {
      dispatch(saveCartItems(props.cartItems));
      for (let i = 0; i < props.cartItems.length; i++) {
        dispatch(cartActcion.removeItemToCart(props.cartItems[i].itemID));
      }
      dispatch(betActions.removeToggle());
      return toast.success("Sorte lançada! Agora é só cruzar os dedos 🤞");
    }
    toast.error("Você precisa de pelo menos 1 jogo para efetuar sua aposta!");
  };

  return (
    <CartItems>
      <Card>
        <h3>Cart</h3>
        <div className={"games"}>
          {toggleItem &&
            props.cartItems.map(
              (item: IPropsItem) => (
                (finalPrice = finalPrice + item.itemPrice),
                (
                  <Game
                    key={item.itemID}
                    name={"Cart"}
                    item={{
                      id: item.itemID,
                      type: item.itemType,
                      data: item.itemData,
                      price: item.itemPrice,
                      game: item.itemGame,
                      color: item.itemColor,
                      quantity: item.quantity,
                    }}
                  />
                )
              )
            )}
          {!toggleItem && (
            <p className="CartNull">Seu carrinho está vazio!!!</p>
          )}
        </div>
        <h3>
          Cart <span>total: </span>
          {finalPrice > 0
            ? finalPrice.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })
            : "R$ 0,00"}
        </h3>
        <button type="button" onClick={onHandlerSave}>
          Save
        </button>
      </Card>
    </CartItems>
  );
};

export default Cart;
