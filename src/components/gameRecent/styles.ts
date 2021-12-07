import styled from "styled-components";

export const Game = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  padding: 0.5em;

  .infos-game {
    flex-direction: column;
    border-left: 0.4em solid ${(props) => props.color};
    border-radius: 0.5em;
  }
  .infos-game > p {
    font-size: 1.2em;
    font-weight: bold;
    word-wrap: break-word;
    margin-left: 0.4em;
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
  .type {
    color: ${(props) => props.color};
  }

  .infos-game > p > span {
    font-size: 1vw;
    font-weight: 400;
  }

  @media (max-width: 780px) {
    & div {
      width: 100%;
    }
    & > button > img {
      width: 8vw;
      height: 8vw;
    }
    .infos-game > p {
      width: 90%;
    }
    .infos-game > p > span {
      font-size: 0.6em;
    }
  }
`;
