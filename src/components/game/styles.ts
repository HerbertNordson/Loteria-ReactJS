import styled from "styled-components";

export const Game = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  padding: 0.5em;
  margin: 1em 0;
  height: 15%;

  .infos-game {
    border-left: 0.3em solid ${(props) => props.color};
    border-bottom-left-radius: 0.2em;
    border-top-left-radius: 0.2em;
  }
  .infos-game > p {
    width: 15vw;
    word-wrap: break-word;
  }

  & > button {
    width: 10% !important;
    height: 10% !important;
    padding: 0 !important;
    background: transparent !important;
  }

  & > button > img {
    width: 1.5vw;
    height: 1.5vw;
  }

  p {
    margin: 0.4em;
    font-size: 0.8em;
    font-weight: bold;
  }
  .type {
    color: ${(props) => props.color};
  }

  p span {
    font-weight: 400;
  }

  @media (max-width: 780px) {
    & > button > img {
      width: 8vw;
      height: 8vw;
    }
  }
`;
