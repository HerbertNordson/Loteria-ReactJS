import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth";

import { Card } from "../../components/card/styles";
import { Container } from "./styles";

import TitleHome from "../../components/home/TitleHome";
import FormAuth from "../../components/form/FormAuth";
// import FormResgiter from "../../layout/form/FormRegister";
// import FormReset from "../../layout/form/FormReset";

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
          {/* <FormResgiter /> */}
          {/* <FormReset /> */}
        </Card>
        <button>Sign Up</button>
      </div>
    </Container>
  );
};

export default Home;
