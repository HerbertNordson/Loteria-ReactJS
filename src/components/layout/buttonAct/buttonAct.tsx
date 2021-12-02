import { useDispatch } from "react-redux";
import { betActions } from "../../../store/gameBet";
import { Act } from "./styled";

interface IPropsACT {
  onClean: () => void;
  onAdd: () => void;
}

const ButtonsAct: React.FC<IPropsACT> = (props) => {
  const dispatch = useDispatch();

  function onHandlerClean() {
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
