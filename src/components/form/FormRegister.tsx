import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { authActions } from "store";
import { Card } from "..";
import { Container } from "./styles";

interface IPropsForm {
  onType: (props: string) => void;
}

const FormResgiter: React.FC<IPropsForm> = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, setLogin] = useState<string>();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>();

  function onHandlerSubmit(ev: any) {
    ev.preventDefault();
    dispatch(authActions.register({ login, email, password }));
    toast.warning("Cadastro efetuado com sucesso!");
    navigate("/");
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
