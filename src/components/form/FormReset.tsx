import { Container } from "./styles";

const FormReset = () => {
  return (
    <Container>
      <form>
        <input type="email" placeholder="Email" />
      </form>
      <button type="submit">Send link</button>
    </Container>
  );
};

export default FormReset;
