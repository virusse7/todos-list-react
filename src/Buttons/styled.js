import styled from "styled-components";

export const Button = styled.button`
  font-size: 16px;
  padding: 5px;
  margin: 5px;
  color: teal;
  border-style: none;
  background-color: whitesmoke;
  transition: 1s;

  &:hover {
    color: hsl(180, 100%, 35%);
  }
  &:disabled {
    color: hsl(0, 0%, 40%);
  }

  @media(max-width: 767px) {
    margin: 5px;
  }
`;

export const Div = styled.div`
  margin: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media(max-width: 767px) {
    display: grid;
      grid-template-columns: auto;
      grid-template-rows: 1fr 1fr;
  }
`;