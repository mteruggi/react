import Menu from '../menu/Menu'
import './Footer.scss';

function Footer(props) {
    return (
        <footer className={`App-footer ${props.bgColor}`}>
            {props.lastName}
            <div className={`footer-top`}></div>
            <div className={`footer-bottom`}>
                <Menu Id="footer-menu" />
            </div>
        </footer>
    );
}

export default Footer;