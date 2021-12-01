import React, { useContext } from "react";
import { ButtonType } from "./styled";
import { Context } from "../../utils/context";

interface IProps {
  name: string | null;
  onContent: (props: string | null) => void;
}

const ButtonFilter: React.FC<IProps> = (props) => {
  const ctxBut = useContext(Context);

  function getNameHandler(ev: React.MouseEvent) {
    ev.preventDefault();
    props.onContent(ev.currentTarget.textContent);
  }

  return (
    <React.Fragment>
      {ctxBut.games.map((item) => {
        return (
          <ButtonType
            color={item.color}
            onClick={getNameHandler}
            name={item.type}
            style={{
              backgroundColor: item.type === props.name ? item.color : "#fff",
              color: item.type === props.name ? "#fff" : item.color,
            }}
            key={item.type}
          >
            {item.type}
          </ButtonType>
        );
      })}
    </React.Fragment>
  );
};

export default ButtonFilter;
