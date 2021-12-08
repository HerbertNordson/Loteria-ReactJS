import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { authActions } from "../../store/auth";

import { HeaderContainer } from "./styles";

const Header = () => {
  const dispatch = useDispatch();
  const deslogger = () => {
    dispatch(authActions.logout());
  };

  return (
    <HeaderContainer>
      <div className="menu">
        <Link to="/home" className="TGL">
          TGL
        </Link>
        <Link to="/home">Home</Link>
      </div>
      <div className="menu">
        <Link to="/account">Account</Link>
        <Link to="/" onClick={deslogger}>
          Log out
        </Link>
      </div>
    </HeaderContainer>
  );
};

export default Header;
