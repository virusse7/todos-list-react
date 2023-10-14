import { Container } from "../../common/Container/styled";
import { AuthorContainer, Header, Title, AuthorDiv } from "./styled";

export default () => (
    <Container>
        <AuthorContainer>
            <Header>
                <Title>O autorze</Title>
            </Header>
            <AuthorDiv>
                Od zawsze interesowały mnie samochody i komputery,lubiałem grać w gry w których można było bawić się kodowaniem. Kiedyś w szkole miałem już lekcje odnośnie języka znaczników czyli HTML-a, ale dużo rzeczy było dla mnie nie jasne i pomyślałem że to nie dla mnie. Po kilku latach wróciła chęć i zajawka. Zacząłem czytać, oglądać i powoli uczyć się samodzielnie, a obecnie przechodzę kurs na zostanie frontendowcem u youcode. Po kursie będę dalej się uczył i mam nadzieje że w pracy szlifował dalszą wiedzę.
            </AuthorDiv>
        </AuthorContainer>
    </Container>
);