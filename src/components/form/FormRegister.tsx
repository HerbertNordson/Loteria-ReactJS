import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { authActions } from "store";
import { IUser } from "store/auth";
import { Card } from "..";
import { Container } from "./styles";

interface IPropsForm {
  onType: (props: string) => void;
}

interface IUserBD {
  auth: {
    isAuthenticated: boolean;
    user: object[];
    actualUser: object[];
  };
}

const FormResgiter: React.FC<IPropsForm> = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, setLogin] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const users = useSelector((state: IUserBD) => state.auth.user);

  function onHandlerSubmit(ev: any) {
    ev.preventDefault();
    if (password.length < 8) {
      toast.warning("A senha precisa conter pelo menos 8 caracters!");
      return;
    }
    if (login.length < 3) {
      toast.warning("Insira um nome com pelo menos 3 caracters!");
      return;
    }
    if (email.length === 0) {
      toast.warning("Insira um endereço de e-mail para concluir o cadastro!");
      return;
    } else if (email.length > 0) {
      users.map((item: any) => {
        if (item.email === email) {
          toast.warning("E-mail já cadastrado! Insira um novo e-mail válido.");
          return;
        }
      });
    }
    dispatch(authActions.register({ login, email, password }));
    toast.success("Cadastro efetuado com sucesso!");
    setEmail("");
    setLogin("");
    setPassword("");
    onHandlerFormType();
  }

  function handleLogin(ev: any) {
    ev.preventDefault();
    setLogin(ev.target.value);
  }
  function handleEmail(ev: any) {
    ev.preventDefault();
    setEmail(ev.target.value);
  }
  function handlePassword(ev: any) {
    ev.preventDefault();
    setPassword(ev.target.value);
  }

  const onHandlerFormType = () => {
    props.onType("Login");
  };

  return (
    <>
      <h3>Registration</h3>
      <Card>
        <Container>
          <form onSubmit={onHandlerSubmit}>
            <input
              type="name"
              placeholder="Name"
              value={login}
              onChange={handleLogin}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmail}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePassword}
            />
            <button type="submit">Register</button>
          </form>
        </Container>
      </Card>
      <button type="button" onClick={onHandlerFormType}>
        {"←"}Back
      </button>
    </>
  );
};

export default FormResgiter;
