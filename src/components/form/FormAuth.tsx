import { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "..";
import { Container } from "./styles";

const Users = [
  {
    email: "herbert@admin.com",
    senha: "admin123",
  },
];

interface IPropsForm {
  onLogin: () => void;
  onType: (props: string) => void;
}

const FormAuth: React.FC<IPropsForm> = (props) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>();

  const submitHandler = () => {
    Users.map((item: any) => {
      if (item.email === email && item.senha === password) {
        props.onLogin();
      } else {
        alert("Email ou Senha incorreto!");
      }
    });
  };

  function handleEmail(ev: any) {
    ev.preventDefault();
    setEmail(ev.target.value);
  }
  function handlePassword(ev: any) {
    ev.preventDefault();
    setPassword(ev.target.value);
  }

  const onHandlerFormType = () => {
    props.onType("Register");
  };
  const onHandlerFormTypeReset = () => {
    props.onType("Reset");
  };

  return (
    <>
      <h3>Authentication</h3>
      <Card>
        <Container>
          <form onSubmit={submitHandler}>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={handleEmail}
            />
            <input
              type="password"
              id="id-password"
              placeholder="Password"
              value={password}
              onChange={handlePassword}
            />
            <Link to="/" onClick={onHandlerFormTypeReset}>
              I forget my password
            </Link>
            <button type="submit">Log In</button>
          </form>
        </Container>
      </Card>
      <button type="button" onClick={onHandlerFormType}>
        Sign Up
      </button>
    </>
  );
};

export default FormAuth;
