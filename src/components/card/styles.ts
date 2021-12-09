import styled from "styled-components";

export const Card = styled.div`
  background: #fff;
  border-radius: 1em;
  border: 1px solid #dddddd;
  box-shadow: 0px 3px 25px #00000014;
  overflow: hidden;

  & .games {
    width: 95%;
    max-height: 20em;
    overflow-y: auto;
  }
`;
