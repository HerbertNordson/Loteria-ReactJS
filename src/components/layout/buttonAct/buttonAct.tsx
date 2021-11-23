import { Act } from "./styled";

const ButtonsAct = () => {
  return (
    <Act>
      <div>
        <button>Complete game</button>
        <button>Clear game</button>
      </div>
      <button className="add">Add to cart</button>
    </Act>
  );
};

export default ButtonsAct;
