import { SectionContainer, Header, Title, Paragraph } from "./styled";


const Section = ({ title, body, extraHeaderContent }) => (
    <SectionContainer>
        <Header>
            <Title>{title}</Title>
            {extraHeaderContent}
        </Header>
        <Paragraph>{body}</Paragraph>
    </SectionContainer>
);

export default Section;