import React, { Fragment, useContext, useEffect, useState } from "react";
import ButtonFilter from "../../layout/button/buttonFitler";
import ButtonsAct from "../../layout/buttonAct/buttonAct";
import { Card } from "../../layout/card/styled";
import CompleteGame from "../../layout/game/CompleteGame";
import Header from "../../layout/header/Header";
import { TypesCenter, TypesContent } from "./styled";
import { Context } from "../../utils/context";
import { useDispatch, useSelector } from "react-redux";
import { cartActcion } from "../../../store/cart";

const GameBet: React.FC<{}> = (props) => {
  const ctxData = useContext(Context);

  const [type, setType] = useState<string | null>("Lotofácil");
  const [description, setDescription] = useState<String>("");
  const [range, setRange] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [maxNumber, setMaxNumber] = useState<number>(0);
  const [color, setColor] = useState<string>("");
  const [count, setCount] = useState<number>(1);
  const [game, setGame] = useState<number[]>([]);

  const dispatch = useDispatch();
  const toggleItem = useSelector((state: any) => state.gameBet.itemCart);
  const cartItems = useSelector((state: any) => state.cart.items);

  const buttonArray: any = [];
  let finalPrice: number = 0;
  const data = new Date();
  const date = data.getDay() + "/" + data.getMonth() + "/" + data.getFullYear();

  useEffect(() => {
    ctxData.games.map((content) => {
      if (content.type === type) {
        return ContentTypesHandler(content);
      }
      return null;
    });
  }, [ctxData.games, ContentTypesHandler, type]);

  function ContentTypesHandler(props: any) {
    setType(props.type);
    setDescription(props.description);
    setRange(props.range);
    setPrice(props.price);
    setMaxNumber(props["max-number"]);
    setColor(props.color);
  }

  function onButtonClickHandler(ev: React.MouseEvent) {
    ev.preventDefault();
    if (count > maxNumber) {
      return alert("Quantidade máxima de números atingida!");
    }
    if (ev.currentTarget.classList.contains("ativo")) {
      ev.currentTarget.removeAttribute("style");
      ev.currentTarget.classList.remove("ativo");
      setCount(count - 1);
    } else {
      ev.currentTarget.classList.add("ativo");
      ev.currentTarget.setAttribute("style", `background: ${color}`);
      setCount(count + 1);
    }
  }

  for (let i = 1; i <= range; i++) {
    buttonArray.push(
      <button
        className="number"
        onClick={onButtonClickHandler}
        value={i}
        key={i}
      >
        {i < 10 ? `0${i}` : i}
      </button>
    );
  }

  function cleanGame(): void {
    setCount(1);
    setRange(0);
  }

  function onHandlerClick(props: string | null) {
    cleanGame();
    setType(props);
  }

  const id = (Math.random() * 10).toFixed(2);

  const addToCartHandler = () => {
    dispatch(
      cartActcion.addItemToCart({
        game,
        price,
        type,
        date,
        color,
        id,
      })
    );

    console.log(cartItems);
  };

  return (
    <Fragment>
      <Header />
      <TypesContent>
        <TypesCenter>
          <h2>New bet for {type}</h2>
          <p>Choose a game</p>

          <ButtonFilter name={type} onContent={onHandlerClick} />

          <p>
            Fill your bet
            <span>{description}</span>
          </p>

          {buttonArray}

          <ButtonsAct onClean={cleanGame} onAdd={addToCartHandler} />
        </TypesCenter>
        <div className="Cart">
          <Card>
            <h3>Cart</h3>
            {toggleItem &&
              cartItems.map(
                (item: any) => (
                  (finalPrice = finalPrice + item.totalPrice),
                  (
                    <CompleteGame
                      id={id}
                      type={item.itemType}
                      data={date}
                      price={item.itemPrice}
                      game={game}
                      color={item.itemColor}
                    />
                  )
                )
              )}
            {!toggleItem && <p>Seu carrinho está vazio!!!</p>}
            <h3>
              Cart <span>total: </span>
              {finalPrice > 0
                ? finalPrice.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })
                : "R$ 0,00"}
            </h3>
            <button>Save</button>
          </Card>
        </div>
      </TypesContent>
    </Fragment>
  );
};

export default GameBet;
