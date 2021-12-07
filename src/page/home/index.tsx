import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { authActions } from "../../store";

import { TitleHome, FormAuth, FormReset, FormResgiter } from "../../components";

import { Container } from "./styles";
import { useState } from "react";

const Home = () => {
  const dispach = useDispatch();
  const navigate = useNavigate();
  const loginHandler = () => {
    dispach(authActions.login());
    navigate("/home");
    return;
  };

  const [formType, setFormType] = useState<string>("Login");

  const handlerFormType = (props: string) => {
    setFormType(props);
  };

  return (
    <Container>
      <TitleHome />
      <div>
        {formType === "Login" && (
          <FormAuth onLogin={loginHandler} onType={handlerFormType} />
        )}
        {formType === "Register" && <FormResgiter onType={handlerFormType} />}
        {formType === "Reset" && <FormReset onType={handlerFormType} />}
      </div>
    </Container>
  );
};

export default Home;
