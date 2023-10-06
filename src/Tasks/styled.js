import styled, { css } from "styled-components";

export const List = styled.ul`
    margin: 5px;
    padding: 10px;
    list-style: none;
    display: flex;
    flex-direction: column;
`;

export const Button = styled.button`
    height: 30px;
    width: 30px;
    margin: 5px;
    padding: 5px;
    transition: 1s;

    ${({ done }) => done && css`
        background-color: hsl(120, 100%, 35%);
        border-style: none;
        &:hover {
            background-color: hsl(120, 100%, 40%);
        }
    `}

    ${({ remove }) => remove && css`
        background-color: hsl(0, 100%, 45%);
        border-style: none;
        &:hover {
            background-color: hsl(0, 100%, 55%);
        }
    `}
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: 40px 1fr 40px;
    justify-content: center;
    align-items: center;
    margin: 0px;
    padding: 5px;
    border-bottom: 1px solid gainsboro;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;