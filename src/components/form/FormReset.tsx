import { Card } from "..";
import { Container } from "./styles";

interface IPropsForm {
  onType: (props: string) => void;
}

const FormReset: React.FC<IPropsForm> = (props) => {
  const onHandlerFormType = () => {
    props.onType("Login");
  };

  return (
    <>
      <h3>Reset Password</h3>
      <Card>
        <Container>
          <form>
            <input type="email" placeholder="Email" />
          </form>
          <button type="submit">Send link</button>
        </Container>
      </Card>
      <button type="button" onClick={onHandlerFormType}>
        {"←"}Back
      </button>
    </>
  );
};

export default FormReset;
