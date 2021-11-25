import styled from "styled-components";

export const TypesContent = styled.main`
  display: flex;
  justify-content: space-around;
  width: 90%;
  min-height: 80vh;
  margin: auto;

  .Cart {
    width: 30%;
    padding: 2em;
  }

  .Cart h3,
  .Cart div > div {
    text-transform: uppercase;
    font-style: italic;
    margin: 1em;
  }

  .Cart button {
    background: #e2e2e2;
    color: #27c383;
    border: none;
    border-top: 1px solid #f4f4f4;
    font-size: 2rem;
    text-align: center;
    width: 100%;
    padding: 0.5em;
    overflow: hidden;
    cursor: pointer;
  }

  @media (max-width: 780px) {
    flex-direction: column;

    .Cart {
      width: auto;
      padding: 2em 0;
    }
  }
`;

export const TypesCenter = styled.section`
  width: 70%;
  padding: 2em;

  & > p {
    margin: 1em 0;
  }

  & .number {
    padding: 0.5em;
    margin-right: 1em;
    margin-bottom: 1em;
    font-size: 1.5rem;
    font-weight: bold;
    color: #fff;
    background: #adc0c4;
    border: none;
    border-radius: 1.5rem;
    outline: none;
    cursor: pointer;
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
