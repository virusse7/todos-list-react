import "./style.css"
const Section = ({ title, body, extraHeaderContent }) => (
    <section className="listContainer">
        <header className="list__headerElement">
            <h2 className="list__header">{title}</h2>
            {extraHeaderContent}
        </header>
        <div>
            {body}
        </div>
    </section>
);

export default Section;