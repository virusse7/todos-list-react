import styled from "styled-components";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export const StyledNav = styled.nav`
    background-color: ${({ theme }) => theme.color.teal};
    display: flex;
    justify-content: center;
`;

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: ${({ theme }) => theme.color.white};
    font-size: 20px;
    transition: 1s;
    &:hover {
        color: ${({ theme }) => theme.color.black};
    };
    &.active {
        font-weight: bold;
    };
`;

export const StyledUl = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
        grid-gap: 15px;
    };
`;

export const StyledLi = styled.li``;