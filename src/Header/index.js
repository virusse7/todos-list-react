import styled from "styled-components";

const MainHeader = styled.header`
  margin: 30px;
`;

const Header = ({ title }) => (
    <MainHeader>
        <h1>{title}</h1>
    </MainHeader>
);

export default Header;