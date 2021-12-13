import { useDispatch } from "react-redux";

import { numberActions, betActions } from "@reduxStore";

import { IPropsACT } from "./interface";
import { Act } from "./styles";

const ButtonsAct: React.FC<IPropsACT> = (props) => {
  const dispatch = useDispatch();
  let numbers1: number[] = [];

  function onHandlerClean() {
    dispatch(numberActions.handlerRemoveArrNumbers());
    props.onClean();
  }

  const itemHandleCart = () => {
    dispatch(betActions.toggle());
    props.onAdd();
  };

  const itemHandleRandom = () => {
    let min: number, max: number, r: number, n: number, p: boolean;
    min = 1;
    max = props.range;
    r = props.maxNumber;

    for (let i = 0; i < r; i++) {
      do {
        n = Math.floor(Math.random() * (max - min + 1)) + min;
        p = numbers1.includes(n);
        if (!p) {
          numbers1.push(n);
        }
      } while (p);
    }

    newFunc();
    styleHandler();
  };

  function newFunc() {
    let news = numbers1.sort((a: number, b: number) => a - b);
    if (props.game.length === news.length) {
      return;
    }
    for (let i = 0; i < news.length; i++) {
      dispatch(numberActions.handlerArrNumbers(news[i]));
    }

    props.onRandom("ALL");
    return;
  }

  function styleHandler() {
    for (let i = 0; i < props.range; i++) {
      for (let l = 0; l < props.range; l++) {
        if (props.game[i] === +props.numberRef.current.children[l].value) {
          props.numberRef.current.children[l].classList.add("ativo");
          props.numberRef.current.children[l].setAttribute(
            "style",
            `background: ${props.color}`
          );
        }
      }
    }
  }

  return (
    <Act>
      <div>
        <button onClick={itemHandleRandom} className="random">
          Complete game
        </button>
        <button onClick={onHandlerClean} className="clean">
          Clear game
        </button>
      </div>
      <button className="add" onClick={itemHandleCart}>
        Add to cart
      </button>
    </Act>
  );
};

export default ButtonsAct;
