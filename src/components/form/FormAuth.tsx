import { useState } from "react";
import { Container } from "./styles";

const Users = [
  {
    email: "herbert@admin.com",
    senha: "admin123",
  },
];

interface IPropsForm {
  onLogin: () => void;
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

  return (
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
        <a href="/">I forget my password</a>
        <button type="submit">Log In</button>
      </form>
    </Container>
  );
};

export default FormAuth;
