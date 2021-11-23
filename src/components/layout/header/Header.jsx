import { HeaderContainer } from "./styled";

const Header = () => {
  return (
    <HeaderContainer>
      <div className="menu">
        <a href="/" className="TGL">
          TGL
        </a>
        <a href="/">Home</a>
      </div>
      <div className="menu">
        <a href="/">Account</a>
        <a href="/">Log out</a>
      </div>
    </HeaderContainer>
  );
};

export default Header;
