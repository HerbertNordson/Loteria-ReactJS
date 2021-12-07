import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IGame } from "../../page/gameBet/interfaces";

import { numberActions } from "../../store/";

import { Number } from "./styles";

interface IPropsNumbers {
  number: number;
  maxRange: number;
  count: number;
  color: string;
  onHandlerCount: (props: string) => void;
}

const ButtonNumber: React.FC<IPropsNumbers> = (props) => {
  const numberArray: number[] = [];
  const [btnArray, setBtnArray] = useState<number[]>([]);
  const game = useSelector((state: IGame) => state.number.numberArr);
  const dispatch = useDispatch();

  for (let i = 1; i <= props.number; i++) {
    numberArray.push(i);
  }

  function onButtonClickHandler(ev: any) {
    ev.preventDefault();
    if (props.count > props.maxRange) {
      for (let i = 0; i < btnArray.length; i++) {
        if (ev.target.value === btnArray[i]) {
          ev.target.removeAttribute("style");
          ev.target.classList.remove("ativo");
          setBtnArray(btnArray.filter((item) => item !== ev.target.value));
          props.onHandlerCount("REMOVE");
          return;
        }
      }
      return alert(
        "Seu jogo está completo! Remova um número para inserir um novo ou adicione sua aposta ao carrinho!"
      );
    }
    if (ev.target.classList.contains("ativo")) {
      ev.target.removeAttribute("style");
      ev.target.classList.remove("ativo");
      setBtnArray(btnArray.filter((item) => item !== ev.target.value));
      props.onHandlerCount("REMOVE");
      return;
    } else {
      ev.target.classList.add("ativo");
      ev.target.setAttribute("style", `background: ${props.color}`);
      setBtnArray([...btnArray].concat(ev.target.value));
      const numb = ev.target.value;
      dispatch(numberActions.handlerArrNumbers(numb));
      props.onHandlerCount("ADD");
      return;
    }
  }

  return (
    <>
      {numberArray.map((btn) => (
        <Number value={btn.valueOf()} key={btn} onClick={onButtonClickHandler}>
          {btn < 10 ? "0" + btn : btn}
        </Number>
      ))}
    </>
  );
};

export default ButtonNumber;
