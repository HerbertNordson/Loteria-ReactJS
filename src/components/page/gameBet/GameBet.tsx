import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActcion } from "../../../store/cart";

import ButtonFilter from "../../layout/button/buttonFitler";
import ButtonsAct from "../../layout/buttonAct/buttonAct";
import CompleteGame from "../../layout/game/CompleteGame";
import Header from "../../layout/header/Header";
import ButtonNumber from "../../layout/buttonNumbers/buttonNumbers";

import { Card } from "../../layout/card/styled";
import { TypesCenter, TypesContent } from "./styled";
import { numberActions } from "../../../store/gameNumber";

interface IPropsData {
  data: any[];
}

const GameBet: React.FC<IPropsData> = (props) => {
  const [type, setType] = useState<string | null>("Lotofácil");
  const [description, setDescription] = useState<String>("");
  const [range, setRange] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [maxNumber, setMaxNumber] = useState<number>(0);
  const [color, setColor] = useState<string>("");
  const [count, setCount] = useState<number>(1);
  const dispatch = useDispatch();
  const toggleItem = useSelector((state: any) => state.gameBet.itemCart);
  const cartItems = useSelector((state: any) => state.cart.items);
  const game = useSelector((state: any) => state.number.numberArr);

  let finalPrice: number = 0;
  const data = new Date();
  const date = data.getDay() + "/" + data.getMonth() + "/" + data.getFullYear();

  useEffect(() => {
    props.data.map((content) => {
      if (content.type === type) {
        return ContentTypesHandler(content);
      }
      return null;
    });
  }, [props.data, ContentTypesHandler, type]);

  function ContentTypesHandler(props: any) {
    setType(props.type);
    setDescription(props.description);
    setRange(props.range);
    setPrice(props.price);
    setMaxNumber(props["max-number"]);
    setColor(props.color);
  }

  function cleanGame(): void {
    dispatch(numberActions.handlerRemoveArrNumbers());
    setCount(1);
    setRange(0);
  }

  function onHandlerClick(props: string | null) {
    cleanGame();
    setType(props);
  }

  const addToCartHandler = () => {
    if (game.length < maxNumber) {
      return alert(
        `Faltam ${maxNumber - game.length} números para concluir o seu jogo!`
      );
    }
    dispatch(
      cartActcion.addItemToCart({
        game,
        price,
        type,
        date,
        color,
      })
    );
    onHandlerClick(type);
  };

  const countHandler = (props: string) => {
    if (props === "REMOVE") {
      setCount(count - 1);
    } else if (props === "ADD") {
      setCount(count + 1);
    }
  };

  return (
    <Fragment>
      <Header />
      <TypesContent>
        <TypesCenter>
          <h2>New bet for {type}</h2>
          <p>Choose a game</p>

          <ButtonFilter
            name={type}
            onContent={onHandlerClick}
            data={props.data}
          />

          <p>
            Fill your bet
            <span>{description}</span>
          </p>

          <ButtonNumber
            number={range}
            maxRange={maxNumber}
            count={count}
            color={color}
            onHandlerCount={countHandler}
          />

          <ButtonsAct onClean={cleanGame} onAdd={addToCartHandler} />
        </TypesCenter>
        <div className="Cart">
          <Card>
            <h3>Cart</h3>
            {cartItems.map(
              (item: any) => (
                (finalPrice = finalPrice + item.itemPrice),
                (
                  <CompleteGame
                    key={item.itemID}
                    item={{
                      id: item.itemID,
                      type: item.itemType,
                      data: date,
                      price: item.itemPrice,
                      game: item.itemGame,
                      color: item.itemColor,
                      quantity: item.quantity,
                    }}
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
