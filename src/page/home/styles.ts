import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  min-height: 80vh;
  padding: 2em;

  & div {
    text-align: center;
    font-style: italic;
    width: 25rem;
  }

  & div h3 {
    font-size: 2rem;
    margin-bottom: 1em;
  }

  & div > button {
    border: none;
    font-size: 2rem;
    font-weight: 600;
    font-style: italic;
    margin: 1em;
    color: #707070;
    background: transparent;
    outline: none;
    cursor: pointer;
  }

  @media (max-width: 780px) {
    flex-direction: column;
    justify-content: space-between;

    & div {
      width: 100%;
    }
  }
`;
