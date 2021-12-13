import { Card, Header } from "components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { authActions } from "store";
import { Titulo, CAccount } from "./styles";

interface IUser {
  auth: {
    isAuthenticated: boolean;
    user: object[];
    actualUser: object[];
  };
}

const Account = () => {
  const dispatch = useDispatch();
  const actualUser = useSelector((state: IUser) => state.auth.actualUser);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordOld, setPasswordOld] = useState<string>("");
  const [nameAct, setNameAct] = useState<string>("");
  const [emailAct, setEmailAct] = useState<string>("");
  const [passwordAct, setPasswordAct] = useState<string>("");

  useEffect(() => {
    actualUser.map((item: any) => {
      setEmailAct(item.email);
      setPasswordAct(item.password);
      setNameAct(item.login);
    });
  }, [actualUser]);

  function onHandlerName(ev: any) {
    ev.preventDefault();
    if (name !== nameAct) {
      dispatch(
        authActions.altLogin({
          name,
          email: emailAct,
        })
      );
      return toast.success(
        "Seu Nome foi alterado! As mudanças ocorrerão na próxima vez que você efetuar o Login."
      );
    }
    return toast.error(
      "Algo deu errado! O nome inserido é igual ao anterior, insira um nome diferente."
    );
  }
  function onHandlerEmail(ev: any) {
    ev.preventDefault();
    if (email !== emailAct) {
      dispatch(
        authActions.altEmail({
          email,
          emailOld: emailAct,
        })
      );
      return toast.success(
        "Seu e-mail foi alterado! As mudanças ocorrerão na próxima vez que você efetuar o Login."
      );
    }
    return toast.error(
      "Algo deu errado! O E-mail inserido é igual ao anterior, insira um e-mail diferente."
    );
  }
  function onHandlerPassword(ev: any) {
    ev.preventDefault();
    if (password.length < 8) {
      return toast.warning("A senha precisa ter 8 digitos ou mais!");
    }
    if (password !== passwordOld && passwordOld === passwordAct) {
      dispatch(
        authActions.altPassword({
          password,
          email: emailAct,
        })
      );
      return toast.success(
        "Seu e-mail foi alterado! As mudanças ocorrerão na próxima vez que você efetuar o Login."
      );
    } else if (passwordOld !== passwordAct) {
      return toast.error(
        "Algo deu errado! No campo 'senha atual', o valor inserido está incorreto!"
      );
    }
    return toast.error(
      "Algo deu errado! A senha inserida é igual ao anterior, insira uma senha diferente."
    );
  }

  return (
    <>
      <Header />
      <CAccount>
        <Titulo>Welcome to TGL, {nameAct}</Titulo>
        <p>
          Esta área é reservada para o usuário efetuar alterações a sua conta,
          conforme desejado:
        </p>
        <Card>
          <form onSubmit={onHandlerName}>
            <label htmlFor="Login">Alterar Nome</label>
            <input
              type="name"
              placeholder={nameAct}
              value={name}
              onChange={(ev: any) => {
                setName(ev.target.value);
              }}
            />
            <button type="submit">Alterar</button>
          </form>
          <form onSubmit={onHandlerEmail}>
            <label htmlFor="Email">Alterar E-mail</label>
            <input
              type="email"
              placeholder={emailAct}
              value={email}
              onChange={(ev: any) => {
                setEmail(ev.target.value);
              }}
            />
            <button type="submit">Alterar</button>
          </form>
          <form onSubmit={onHandlerPassword}>
            <label htmlFor="Password">Alterar Senha</label>
            <input
              type="password"
              placeholder={"Senha atual"}
              value={passwordOld}
              onChange={(ev: any) => {
                setPasswordOld(ev.target.value);
              }}
            />
            <input
              type="password"
              placeholder={"Senha Nova"}
              value={password}
              onChange={(ev: any) => {
                setPassword(ev.target.value);
              }}
            />
            <button type="submit">Alterar</button>
          </form>
        </Card>
      </CAccount>
    </>
  );
};

export default Account;
