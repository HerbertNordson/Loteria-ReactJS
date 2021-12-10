import React, { Fragment, useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { cartActcion, numberActions, betActions } from "@reduxStore";

import { Button, ButtonsAct, Header, ButtonNumber, Cart } from "@components";

import { toast } from "react-toastify";
import { TypesCenter, TypesContent } from "./styles";
import { IContent, IGame, IPropsData, IPropsState } from "./interfaces";
import { CartItems } from "components/cart/styles";

const GameBet: React.FC<IPropsData> = (props) => {
  const [type, setType] = useState<string | null>("Lotofácil");
  const [description, setDescription] = useState<String>("");
  const [range, setRange] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [maxNumber, setMaxNumber] = useState<number>(0);
  const [color, setColor] = useState<string>("");
  const [count, setCount] = useState<number>(0);

  const dispatch = useDispatch();
  const cartItems = useSelector((state: IPropsState) => state.cart.items);
  const game = useSelector((state: IGame) => state.number.numberArr);

  let date = new Date();
  const data = date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear();
  const numberRef = useRef<any>();

  const ContentTypesHandler = (props: IContent): void => {
    setType(props.type);
    setDescription(props.description);
    setRange(props.range);
    setPrice(props.price);
    setMaxNumber(props["max-number"]);
    setColor(props.color);
  };

  const cleanGame = (): void => {
    dispatch(numberActions.handlerRemoveArrNumbers());
    setCount(0);
    setRange(0);
  };

  const onHandlerClick = (props: string | null): void => {
    cleanGame();
    setType(props);
  };

  const addToCartHandler = (): void => {
    if (game.length < maxNumber) {
      toast.warning(
        `Restam ${maxNumber - game.length} números para concluir o seu jogo!`
      );
      return;
    }

    let Arr: number[] = [];
    game.map((item: number) => {
      for (let i = 0; i < game.length; i++) {
        for (let l = 0; l < game.length; l++) {
          cartItems.map((item: any) => {
            if (item.itemGame[l] === game[i]) {
              Arr.push(game[i]);
            }
          });
        }
      }
    });

    let news = Arr.sort((a: number, b: number) => a - b);
    let newGame = news.filter((item, i) => news.indexOf(item) === i);
    if (newGame.toString() === game.toString()) {
      toast.warning(`Não é possível efetuar jogos em duplicidade!`);
      return;
    }

    dispatch(
      cartActcion.addItemToCart({
        game,
        data,
        price,
        type,
        date,
        color,
      })
    );
    onHandlerClick(type);
  };

  const countHandler = (props: string): void => {
    if (props === "REMOVE") {
      setCount(count - 1);
    } else if (props === "ADD") {
      setCount(count + 1);
    } else if (props === "ALL") {
      setCount(maxNumber);
    }
  };

  useEffect(() => {
    props.data.map((content: any) => {
      if (content.type === type) {
        ContentTypesHandler(content);
      }
    });
  }, [props.data, ContentTypesHandler, type]);

  return (
    <Fragment>
      <Header />
      <TypesContent>
        <TypesCenter>
          <h2>New bet for {type}</h2>
          <p>Choose a game</p>

          <Button name={type} onContent={onHandlerClick} data={props.data} />

          <p>
            Fill your bet
            <span>{description}</span>
          </p>
          <div ref={numberRef}>
            <ButtonNumber
              number={range}
              maxRange={maxNumber}
              count={count}
              color={color}
              onHandlerCount={countHandler}
              game={game}
            />
          </div>
          <ButtonsAct
            onClean={cleanGame}
            onAdd={addToCartHandler}
            onRandom={countHandler}
            game={game}
            color={color}
            maxNumber={maxNumber}
            range={range}
            numberRef={numberRef}
          />
        </TypesCenter>
        <Cart cartItems={cartItems} />
      </TypesContent>
    </Fragment>
  );
};

export default GameBet;
