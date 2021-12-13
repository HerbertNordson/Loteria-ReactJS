import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { authActions } from "@reduxStore";

import { TitleHome, FormAuth, FormReset, FormResgiter } from "@components";

import { Container } from "./styles";
import { useState } from "react";
import { toast } from "react-toastify";

const Home = () => {
  const dispach = useDispatch();
  const navigate = useNavigate();
  const [formType, setFormType] = useState<string>("Login");

  const loginHandler = (props: string) => {
    dispach(authActions.actUser(props));
    dispach(authActions.login());
    toast.success("Login Efetuado com Sucesso!");
    navigate("/home");
    return;
  };

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
