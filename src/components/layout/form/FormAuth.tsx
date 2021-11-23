import { Container } from "./styled";

const FormAuth = () => {
  return (
    <Container>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
      </form>
      <a href="/">I forget my password</a>
      <button type="submit">Log In</button>
    </Container>
  );
};

export default FormAuth;
