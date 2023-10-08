import styled from "styled-components";

export const Button = styled.button`
  font-size: 16px;
  padding: 5px;
  margin: 5px;
  color: ${({ theme }) => theme.color.teal};
  border-style: none;
  background-color: ${({ theme }) => theme.color.whitesmoke};
  transition: 1s;

  &:hover {
    color: ${({ theme }) => theme.color.bondiblue};
  }
  &:disabled {
    color: ${({ theme }) => theme.color.gray};
  }

  @media(
    max-width: ${({ theme }) => theme.breakpoint.mobileMax}px
    ) {
      margin: 5px;
  }
`;

export const StyledButtons = styled.div`
  margin: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media(
    max-width: ${({ theme }) => theme.breakpoint.mobileMax}px
    ) {
      display: grid;
        grid-template-columns: auto;
        grid-template-rows: 1fr 1fr;
  }
`;