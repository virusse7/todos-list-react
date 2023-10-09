import styled from "styled-components";

export const Header = styled.header`
border-bottom: 1px solid ${({ theme }) => theme.color.gainsboro};
margin: 5px 0 2px 0;
display: grid;
grid-template-columns: 1fr auto;

@media (
    max-width: ${({ theme }) => theme.breakpoint.mobileMax}px
    ) {
        display: flex;
        flex-direction: column;
    }
`;

export const Title = styled.h2`
padding: 20px;
margin: 0px;

@media (
    max-width: ${({ theme }) => theme.breakpoint.mobileMax}px
    ) {
        padding-top: 10px;
        padding-left: 0px;
        margin: 0px auto;
    }
`;

export const SectionContainer = styled.section`
background-color: ${({ theme }) => theme.color.whitesmoke};
margin: 30px;
box-shadow: 0px 0px 0px 2px ${({ theme }) => theme.color.silver};
`;