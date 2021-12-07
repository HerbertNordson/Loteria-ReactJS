import React from "react";
import { IItemMap, IProps } from "./interface";
import { ButtonType } from "./styles";

const ButtonFilter: React.FC<IProps> = (props) => {
  function getNameHandler(ev: React.MouseEvent) {
    ev.preventDefault();
    props.onContent(ev.currentTarget.textContent);
  }

  return (
    <React.Fragment>
      {props.data?.map((item: IItemMap) => {
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
