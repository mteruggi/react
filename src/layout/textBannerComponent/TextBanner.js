import './TextBanner.scss'

function TextBanner(props) {
    return (
        <section className={props.styleClass}>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </section>
    );
}

export default TextBanner;