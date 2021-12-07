import { Card } from "..";
import { Container } from "./styles";

interface IPropsForm {
  onType: (props: string) => void;
}

const FormResgiter: React.FC<IPropsForm> = (props) => {
  const onHandlerFormType = () => {
    props.onType("Login");
  };
  return (
    <>
      <h3>Registration</h3>
      <Card>
        <Container>
          <form>
            <input type="name" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
          </form>
          <button type="submit">Register</button>
        </Container>
      </Card>
      <button type="button" onClick={onHandlerFormType}>
        {"←"}Back
      </button>
    </>
  );
};

export default FormResgiter;
