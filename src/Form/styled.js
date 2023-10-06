import styled from "styled-components";

export const FormSection = styled.form`
    display: grid;
    grid-template-columns: 1fr 120px;
    margin: 10px;
    padding: 20px;
    gap: 10px;

    @media (max-width: 767px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        flex-basis: 100%;
    }
`;

export const Button = styled.button`
    background-color: hsl(180, 100%, 25%);
    color: white;
    border-style: hidden;
    transition: 1s;

    &:hover {
        background-color: hsl(180, 100%, 32%);
        transform: scale(1.05);
    }
    &:active {
        background-color: hsl(180, 100%, 35%);
    }

    @media (max-width: 767px) {
        margin: 5px;
        padding: 7px;
        display: flex;
        flex-basis: 100%;
        align-items: center;
        justify-content: center;
    }
`;

export const Input = styled.input`
    padding: 5px;

    @media (max-width: 767px) {
        margin: 5px;
        display: flex;
        flex-basis: 100%;
        align-items: center;
        justify-content: center;
    }
`;