import styled from "styled-components";

export const Game = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  padding: 0.5em;
  margin: 1em 0;
  height: 15%;
  overflow-wrap: break-word;

  .infos-game {
    border-left: 0.3em solid ${(props) => props.color};
    border-bottom-left-radius: 0.2em;
    border-top-left-radius: 0.2em;
  }

  & > button {
    width: 10% !important;
    height: 10% !important;
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
`;
