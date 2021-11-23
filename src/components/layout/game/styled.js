import styled from "styled-components";

export const Game = styled.div`
  flex-direction: column;
  justify-content: center;
  border-left: 0.4em solid;
  padding-left: 1em;
  margin: 1em 0;
  height: 15%;
  overflow-wrap: break-word;

  p {
    margin: 0.4em;
    font-weight: bold;
  }

  p span {
    font-weight: 400;
  }
`;
