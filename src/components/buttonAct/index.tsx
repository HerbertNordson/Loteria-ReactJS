import { useDispatch, useSelector, useStore } from "react-redux";

import { numberActions, betActions } from "../../store/";

import { IPropsACT } from "./interface";
import { Act } from "./styles";

const ButtonsAct: React.FC<IPropsACT> = (props) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state: any) => state.cart.items);

  function onHandlerClean() {
    dispatch(numberActions.handlerRemoveArrNumbers());
    props.onClean();
  }

  const itemHandleCart = () => {
    dispatch(betActions.toggle());
    props.onAdd();
  };

  return (
    <Act>
      <div>
        <button>Complete game</button>
        <button onClick={onHandlerClean}>Clear game</button>
      </div>
      <button className="add" onClick={itemHandleCart}>
        Add to cart
      </button>
    </Act>
  );
};

export default ButtonsAct;
