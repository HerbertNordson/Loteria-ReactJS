import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { authActions } from "../../store";

import {
  Card,
  TitleHome,
  FormAuth,
  FormReset,
  FormResgiter,
} from "../../components";

import { Container } from "./styles";

const Home = () => {
  const dispach = useDispatch();
  const navigate = useNavigate();
  const loginHandler = () => {
    dispach(authActions.login());
    navigate("/game");
    return;
  };

  return (
    <Container>
      <TitleHome />
      <div>
        <h3>Authentication</h3>
        <Card>
          <FormAuth onLogin={loginHandler} />
          <FormResgiter />
          <FormReset />
        </Card>
        <button>Sign Up</button>
      </div>
    </Container>
  );
};

export default Home;
