import React, { useState } from "react";
import { Container } from "./styled";

const Users = [
  {
    email: "herbert@admin.com",
    senha: "admin123",
  },
];

interface IPropsForm {
  onLogin: (email: any, password: any) => void;
}

const FormAuth: React.FC<IPropsForm> = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState<any>();

  const submitHandler = (event: any) => {
    event.preventDefault();
    console.log("cheguei");
  };

  return (
    <Container>
      <form onSubmit={submitHandler}>
        <input type="email" id="email" placeholder="Email" />
        <input type="password" id="password" placeholder="Password" />
      </form>
      <a href="/">I forget my password</a>
      <button type="submit">Log In</button>
    </Container>
  );
};

export default FormAuth;
