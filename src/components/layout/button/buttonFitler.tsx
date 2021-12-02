import React from "react";
import { ButtonType } from "./styled";

interface IProps {
  name: string | null;
  onContent: (props: string | null) => void;
  data: any[];
}

const ButtonFilter: React.FC<IProps> = (props) => {
  function getNameHandler(ev: React.MouseEvent) {
    ev.preventDefault();
    props.onContent(ev.currentTarget.textContent);
  }

  return (
    <React.Fragment>
      {props.data.map((item) => {
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
