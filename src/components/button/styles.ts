import styled from "styled-components";

export const ButtonType = styled.button`
  font-size: 1rem;
  font-weight: 600;
  font-style: italic;
  color: ${(props) => props.color};
  background: #fff;
  border: 2px solid ${(props) => props.color};
  border-radius: 1.5rem;
  padding: 0.5em 1em;
  margin: 1em;
  outline: none;
  cursor: pointer;

  &:hover,
  &:active,
  & > isContected {
    background: ${(props) => props.color} !important;
    color: #fff !important;
  }
`;
