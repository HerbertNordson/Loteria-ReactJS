import styled from "styled-components";

export const Act = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    font-size: 1rem;
    font-weight: bold;
    margin-right: 1em;
    padding: 1em;
    color: #27c383;
    border: 2px solid #27c383;
    border-radius: 0.5em;
    cursor: pointer;
  }

  .add {
    background: #27c383;
    color: #fff;
  }

  @media (max-width: 780px) {
    button {
      margin-bottom: 0.5em;
    }
  }
`;
