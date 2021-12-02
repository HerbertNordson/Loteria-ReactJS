import styled from "styled-components";

export const Game = styled.div`
  flex-direction: column;
  justify-content: center;
  border-left: 0.3em solid ${(props) => props.color};
  border-bottom-left-radius: 0.2em;
  border-top-left-radius: 0.2em;
  padding: 0.5em;
  margin: 1em 0;
  height: 15%;
  overflow-wrap: break-word;

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
