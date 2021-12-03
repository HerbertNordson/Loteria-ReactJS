import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth";

import { Card } from "../../components/layout/card/styled";
import { Container } from "./styled";

import TitleHome from "../../components/layout/home/TitleHome";
import FormAuth from "../../components/layout/form/FormAuth";
// import FormResgiter from "../../layout/form/FormRegister";
// import FormReset from "../../layout/form/FormReset";

const Home = () => {
  const dispach = useDispatch();

  const loginHandler = () => {
    dispach(authActions.login());
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
