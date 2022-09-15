import './Banner.scss';

function Banner (props) {
    return (
        <section className={props.styleClass}>
            <div>
                <h1>{props.title}</h1>
                <p>{props.subTitle}</p>
                <a href={props.linkAddress}>{props.link}</a>
            </div>
        </section>
    );
}

export default Banner;