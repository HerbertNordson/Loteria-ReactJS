import styled from "styled-components";

export const CAccount = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 80vh;

  & p {
    text-align: center;
    margin: 1em;
    border: none;
  }
  & div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 400px;
    height: 400px;
    margin: auto;
    padding: 1em;

    @media (max-width: 780px) {
      width: 80%;
      margin: 2em auto;
    }
  }

  & form > label,
  & form > input {
    display: block;
    margin: 0.5em 0;
    padding: 0.8em;
  }

  & form > label {
    padding: 0;
    font-weight: bold;
    font-style: italic;
  }

  & form > input {
    border: 2px solid #c7c7c7;
    border-radius: 0.4em;
  }

  & form > button {
    margin-left: 60%;
    border: 2px solid #c7c7c7;
    border-radius: 0.4em;
    padding: 0.4em;
    background-color: transparent;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
  }
`;

export const Titulo = styled.h1`
  text-align: center;
  margin-top: 4em;
`;
