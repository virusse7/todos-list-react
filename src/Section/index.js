import { SectionContainer, Header, H2 } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <SectionContainer>
        <Header>
            <H2>{title}</H2>
            {extraHeaderContent}
        </Header>
        <div>
            {body}
        </div>
    </SectionContainer>
);

export default Section;