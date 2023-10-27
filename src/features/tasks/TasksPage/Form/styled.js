import styled from "styled-components";

export const FormSection = styled.form`
    display: grid;
    grid-template-columns: 1fr 120px;
    padding: 20px;
    gap: 10px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        flex-basis: 100%;
    }
`;

export const Button = styled.button`
    background-color: ${({ theme }) => theme.color.teal};
    color: ${({ theme }) => theme.color.white};
    border-style: hidden;
    transition: 1s;

    &:hover {
        background-color: ${({ theme }) => theme.color.brighterteal};
        transform: scale(1.05);
    };
    &:active {
        background-color: ${({ theme }) => theme.color.bondiblue};
    };

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin: 5px;
        padding: 7px;
        display: flex;
        flex-basis: 100%;
        align-items: center;
        justify-content: center;
    };
`;

export const Input = styled.input`
    padding: 5px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin: 5px;
        display: flex;
        flex-basis: 100%;
        align-items: center;
        justify-content: center;
    };
`;