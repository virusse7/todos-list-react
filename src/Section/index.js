import "./style.css";
const Section = ({ title, body, extraHeaderContent }) => (
    <section className="sectionContainer">
        <header className="section__headerElement">
            <h2 className="section__header">{title}</h2>
            {extraHeaderContent}
        </header>
        <div>
            {body}
        </div>
    </section>
);

export default Section;