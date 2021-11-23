import { Container } from "./styled";

const FormResgiter = () => {
  return (
    <Container>
      <form>
        <input type="name" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
      </form>
      <button type="submit">Register</button>
    </Container>
  );
};

export default FormResgiter;
