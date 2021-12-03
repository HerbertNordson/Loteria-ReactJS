import styled from "styled-components";

export const Container = styled.div`
  &form {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    margin: auto;
    height: 100%;
  }
  form input {
    width: 95%;
    padding: 2em 1em;
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
    font-style: italic;
    margin-right: -50%;
    text-decoration: none;
    color: #707070;
  }

  button {
    display: block;
    border: none;
    font-size: 2rem;
    font-weight: 600;
    margin: 1em auto;
    background: transparent;
    color: #b5c401 !important;
    outline: none;
    cursor: pointer;
  }
`;
