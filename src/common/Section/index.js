import { SectionContainer, Header, Title } from "./styled";


const Section = ({ title, body, extraHeaderContent }) => (
    <SectionContainer>
        <Header>
            <Title>{title}</Title>
            {extraHeaderContent}
        </Header>
        <div>
            {body}
        </div>
    </SectionContainer>
);

export default Section;