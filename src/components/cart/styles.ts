import styled from "styled-components";

export const CartItems = styled.div`
  width: 30%;
  padding: 2em;

  & h3,
  & div > div {
    text-transform: uppercase;
    font-style: italic;
    margin: 1em;
  }
  & div > div {
    margin: 0.2em 0.5em;
  }

  & button {
    background: #e2e2e2;
    color: #27c383;
    border: none;
    border-top: 1px solid #f4f4f4;
    font-size: 2rem;
    text-align: center;
    width: 100%;
    padding: 0.5em;
    overflow: hidden;
    cursor: pointer;
  }

  & .CartNull {
    text-align: center;
    padding: 2em 0;
  }

  @media (max-width: 780px) {
    width: auto;
    padding: 2em 0;

    & h3,
    & div > div {
      margin: 0.5em;
    }
  }
`;
