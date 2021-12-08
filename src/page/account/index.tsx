import { useSelector } from "react-redux";
import { Titulo } from "./styles";

interface IUser {
  auth: {
    isAuthenticated: boolean;
    user: any[];
  };
}

const Account = () => {
  const user = useSelector((state: IUser) => state.auth.user);

  return (
    <>
      <Titulo>Welcome to TGL</Titulo>
    </>
  );
};

export default Account;
