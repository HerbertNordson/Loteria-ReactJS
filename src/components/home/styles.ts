import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  p {
    font-size: 4rem;
    font-weight: bold;
    font-style: italic;
    color: #707070;
    margin: 0;
    line-height: 1;
  }
  span {
    display: inline-block;
    font-size: 1.5rem;
    font-weight: 600;
    font-style: italic;
    color: #fff;
    background: #b5c401;
    padding: 0.2em 2.5em;
    border-radius: 1em;
    margin: 1.5em 0;
  }
  h2 {
    font-size: 6rem;
    text-transform: uppercase;
    font-style: italic;
    margin: 0;
    line-height: 0.5;
  }

  @media (max-width: 780px) {
    p {
      font-size: 3rem;
    }
    h2 {
      font-size: 4rem;
      margin-bottom: 0.5em;
    }
  }
`;
