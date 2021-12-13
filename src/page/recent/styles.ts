import styled from "styled-components";

export const Content = styled.main`
  display: flex;
  justify-content: center;

  & a {
    text-decoration: none;
    color: #b5c401;
    font-weight: bold;
    font-size: 1.5em;
    margin-top: 1.5em;
    height: 1.5em;
  }
  & p {
    margin: auto;
  }
  @media (max-width: 780px) {
    flex-direction: column-reverse;

    & > button {
      margin-top: 1em;
      margin-right: 1em;
      text-align: right;
    }

    & a {
      position: fixed;
      right: 0.5em;
      bottom: 2em;
    }
  }
`;

export const Center = styled.section`
  width: 70%;
  padding: 2em 0;
  display: flex;
  align-content: center;
  justify-content: start;
  flex-direction: column;
  font-style: italic;

  & div {
    display: flex;
    width: auto;
    align-items: center;
  }

  & h3 {
    text-transform: uppercase;
    font-size: 1.5rem;
    cursor: pointer;
  }

  .gamesRecents {
    min-height: 70vh;
    flex-direction: column;
    align-items: start;
  }

  @media (max-width: 780px) {
    padding: 0 1em;
    width: auto;

    & div {
      flex-direction: column;
      width: 90%;
    }

    .gamesRecents {
      min-height: 65vh;
      flex-direction: column;
    }

    & h3 {
      display: block;
      margin-top: 0;
    }
  }
`;

export const Filters = styled.div`
  display: inline-flex;
  align-items: center;
  margin-left: 1em;

  & button {
    border: 2px solid;
    background-color: #fff;
    color: #7f3992;
    font-size: 0.8rem;
    margin: 0.5em;
    padding: 0.5em 2em;
    border-radius: 24px;
  }

  @media (max-width: 780px) {
    margin: 0;
    flex-direction: row !important;
    flex-wrap: wrap;
  }
`;
