import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  margin: auto;
  height: 100%;

  form input {
    width: 100%;
    padding: 2em;
    border: none;
    border-bottom: 2px solid #ebebeb;
    outline: none;
  }
  form input::placeholder {
    font-size: 1rem;
    font-weight: bold;
    font-style: italic;
  }

  a {
    position: relative;
    text-align: right;
    font-style: italic;
    margin: 1.5em;
    text-decoration: none;
    color: #707070;
  }

  button {
    border: none;
    font-size: 2rem;
    font-weight: 600;
    margin: 0.5em 1em 1em;
    background: transparent;
    color: #b5c401 !important;
    outline: none;
    cursor: pointer;
  }
`;
