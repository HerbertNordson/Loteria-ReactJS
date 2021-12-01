import { Game } from "./styled";

const CompleteGame = (props: any) => {
  const { id, type, data, price, game, color } = props;

  return (
    <Game key={id} id={id} color={color}>
      <p>{game}</p>
      <p>
        <span>{data}</span> -
        <span>
          {price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </p>
      <p>{type}</p>
    </Game>
  );
};

export default CompleteGame;
