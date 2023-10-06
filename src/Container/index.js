import styled from "styled-components";

const Main = styled.main`
    word-break: break-word;
    max-width: 1000px;
    margin: 0 auto;
    font-family: 'Lato', sans-serif;
`;
const Container = ({ children }) => (
    <Main>
        {children}
    </Main>
);

export default Container;