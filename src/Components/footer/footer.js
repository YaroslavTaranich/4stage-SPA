import './footer.css';
import telegram from './img/telegram.svg';
import whatsup from './img/whatsup.svg';
import instagram from './img/instagram.svg';
import facebook from './img/facebook.svg';



const Footer = () => {
    return(
        <div className="footer">
            <div className="footer__social">
                <a href="https://t.me/qqtay" 
                rel="noreferrer"
                target="_blank"
                className="footer__social-link">
                    <img 
                    src={telegram}
                    alt="telegram icon"
                    className="footer__social-icon"/>
                </a>
                <a href="https://wa.me/79104048423
" 
                rel="noreferrer"
                target="_blank"
                className="footer__social-link">
                    <img 
                    src={whatsup}
                    alt="whatsup icon"
                    className="footer__social-icon"/>
                </a>
                <a href="https://www.instagram.com/4stage_tech/" 
                rel="noreferrer"
                target="_blank"
                className="footer__social-link">
                    <img 
                    src={instagram}
                    alt="instagram icon"
                    className="footer__social-icon"/>
                </a>
                <a href="https://www.facebook.com/4stage.ru" rel="noreferrer"
                target="_blank"
                className="footer__social-link">
                    <img 
                    src={facebook}
                    alt="facebook icon"
                    className="footer__social-icon"/>
                </a>
            </div>
        </div>
    )
}

export default Footer;