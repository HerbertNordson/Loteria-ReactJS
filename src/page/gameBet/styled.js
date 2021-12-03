import styled from "styled-components";

export const TypesContent = styled.main`
  display: flex;
  justify-content: space-around;
  width: 90%;
  min-height: 80vh;
  margin: auto;
  text-transform: uppercase;
  font-style: italic;

  @media (max-width: 780px) {
    flex-direction: column;
  }
`;

export const TypesCenter = styled.section`
  width: 70%;
  padding: 2em;

  & > p {
    margin: 1em 0;
    text-transform: initial;
    font-weight: bold;
  }

  & > p > span {
    display: block;
    font-weight: normal;
  }

  @media (max-width: 780px) {
    width: auto;
    padding: 2em 0;

    & .number {
      margin: 0.2em;
      margin-bottom: 0.5em;
    }
  }
`;
