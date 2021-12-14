import React from "react";
import { IItemMap, IProps } from "./interface";
import { ButtonType } from "./styles";

const ButtonFilter: React.FC<IProps> = (props) => {
  function getNameHandler(ev: any) {
    ev.preventDefault();
    props.onContent(ev.target.value);
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
            value={item.type}
            className={item.type}
          >
            {item.type}
          </ButtonType>
        );
      })}
    </React.Fragment>
  );
};

export default ButtonFilter;
