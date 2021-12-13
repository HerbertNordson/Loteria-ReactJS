import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Card } from "..";
import { Container } from "./styles";

interface IPropsForm {
  onLogin: (props: string) => void;
  onType: (props: string) => void;
}

const FormAuth: React.FC<IPropsForm> = (props) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const Users = useSelector((state: any) => state.auth.user);

  const submitHandler = (ev: any) => {
    ev.preventDefault();

    if (email.length === 0 && password.length === 0) {
      toast.warning("Por favor, preencha os campos de Email e Senha!");
      return;
    } else if (email.length > 0 && password.length === 0) {
      toast.warning("Por favor, preencha o campo de Senha para efetuar Login!");
      return;
    } else if (email.length === 0 && password.length > 0) {
      toast.warning(
        "Por favor, preencha o campo de Senha para efetuar o Login"
      );
      return;
    }

    for (let i = 0; i < Users.length; i++) {
      if (Users[i].email === email && Users[i].password === password) {
        props.onLogin(Users[i].email);
        return;
      } else {
        toast.warning("Email ou Senha incorreto!");
        return;
      }
    }
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
