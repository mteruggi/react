import './SliderBanner.scss';

function SliderBanner(props) {
    return (
        <section className={props.styleClass}>{props.title}</section>
    );
}

export default SliderBanner;