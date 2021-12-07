import React from "react";
import { Card } from "./styles";

const CardForm: React.FC<{}> = (props) => {
  return <Card>{props.children}</Card>;
};

export default CardForm;
