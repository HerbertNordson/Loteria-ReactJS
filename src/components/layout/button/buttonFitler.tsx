import React from "react";
import { ButtonType } from "./styled";

type params = {
  name: string;
  color: string;
};

const ButtonFilter = (props: params) => {
  return <ButtonType color={props.color}>{props.name}</ButtonType>;
};

export default ButtonFilter;
