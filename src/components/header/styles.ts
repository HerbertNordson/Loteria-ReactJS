import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 2em;
  border-bottom: 2px solid #ebebeb;
  z-index: 99;

  .menu {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 30%;
  }

  .menu a {
    text-decoration: none;
    color: #707070;
    font-weight: bold;
    font-style: italic;
    font-size: 1.2rem;
  }

  .menu .TGL {
    font-size: 3rem;
    position: relative;
  }

  a.TGL::after {
    content: "";
    background: #b5c401;
    position: absolute;
    width: 2.2em;
    height: 0.2em;
    bottom: -0.3em;
    left: -0.2em;
    border-radius: 8px;
  }

  @media (max-width: 780px) {
    padding: 0 1em;

    .menu {
      width: 48%;
      justify-content: space-around;
    }

    a.TGL::after {
      bottom: -0.1em;
    }
  }
`;
