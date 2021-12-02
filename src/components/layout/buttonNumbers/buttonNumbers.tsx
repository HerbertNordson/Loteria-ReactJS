import { useState } from "react";
import { Number } from "./styled";

interface IPropsNumbers {
  number: number;
  maxRange: number;
  count: number;
  color: string;
  onHandlerCount: (props: string) => void;
}

const ButtonNumber: React.FC<IPropsNumbers> = (props) => {
  const numberArray: number[] = [];
  const [btnArray, setBtnArray] = useState([]);

  for (let i = 1; i <= props.number; i++) {
    numberArray.push(i);
  }

  function onButtonClickHandler(ev: React.MouseEvent) {
    ev.preventDefault();
    console.log(btnArray);
    if (props.count > props.maxRange) {
      return console.log("foi");
    }
    if (ev.currentTarget.classList.contains("ativo")) {
      ev.currentTarget.removeAttribute("style");
      ev.currentTarget.classList.remove("ativo");
      props.onHandlerCount("REMOVE");
    } else {
      ev.currentTarget.classList.add("ativo");
      ev.currentTarget.setAttribute("style", `background: ${props.color}`);
      props.onHandlerCount("ADD");
    }
  }

  return (
    <>
      {numberArray.map((btn) => {
        return (
          <Number
            type="number"
            value={btn.valueOf()}
            key={btn}
            onClick={onButtonClickHandler}
          >
            {btn < 10 ? "0" + btn : btn}
          </Number>
        );
      })}
    </>
  );
};

export default ButtonNumber;
