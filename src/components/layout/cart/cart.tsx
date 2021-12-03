import { useDispatch, useSelector } from "react-redux";
import { Card } from "../card/styled";
import { CartItems } from "./styled";
import CompleteGame from "../game/CompleteGame";
import { saveActcion } from "../../../store/save";
import { cartActcion } from "../../../store/cart";
import { betActions } from "../../../store/gameBet";

interface IPropCart {
  cartItems: any[];
}

const Cart: React.FC<IPropCart> = (props) => {
  const dispatch = useDispatch();
  const toggleItem = useSelector((state: any) => state.gameBet.itemCart);
  let finalPrice: number = 0;

  const onHandlerSave = () => {
    if (props.cartItems.length > 0) {
      dispatch(saveActcion.addItemToCart(props.cartItems));
      for (let i = 0; i < props.cartItems.length; i++) {
        dispatch(cartActcion.removeItemToCart(props.cartItems[i].itemID));
      }
      dispatch(betActions.removeToggle());
      alert("Suas apostas foram salvas, agora é só cruzar os dedos ;)");
      return;
    }
    alert("Faça pelo menos uma aposta para salvar");
  };

  return (
    <CartItems>
      <Card>
        <h3>Cart</h3>
        {toggleItem &&
          props.cartItems.map(
            (item: any) => (
              (finalPrice = finalPrice + item.itemPrice),
              (
                <CompleteGame
                  key={item.itemID}
                  item={{
                    id: item.itemID,
                    type: item.itemType,
                    data: item.itemDate,
                    price: item.itemPrice,
                    game: item.itemGame,
                    color: item.itemColor,
                    quantity: item.quantity,
                  }}
                />
              )
            )
          )}
        {!toggleItem && <p className="CartNull">Seu carrinho está vazio!!!</p>}
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
