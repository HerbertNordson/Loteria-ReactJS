import { useReducer, useState } from "react";
import { Container } from "./styled";

const emailReducer = (state: any, action: any) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }

  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }

  return { value: "", isValid: false };
};

const passwordReducer = (state: any, action: any) => {
  if (action.type === "USER_PASSWORD") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }

  if (action.type === "INPUT_PASSWORD") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

const FormAuth = (props: any) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: false,
  });

  const emailChangeHandler = (event: any) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });

    setFormIsValid(event.target.value && passwordState.isValid);
  };

  const passwordChangeHandler = (event: any) => {
    dispatchPassword({ type: "USER_PASSWORD", val: event.target.value });
    setFormIsValid(emailState.isValid && event.target.value);
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_PASSWORD" });
  };

  const submitHandler = (event: any) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Container>
      <form>
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
      </form>
      <a href="/">I forget my password</a>
      <button type="submit" disabled={!formIsValid}>
        Log In
      </button>
    </Container>
  );
};

export default FormAuth;
