import { Component } from "react";
import './header.css';
import logo from './img/4-stage-Logo.svg';
import phoneIcon from './img/phone.svg';
import emailIcon from './img/email.svg';

export default class Header extends Component {
    render() {
        return(
            <div className="header">
                <div className="header__logo">
                    <img src={logo} alt="logo"></img>
                </div>
                <div className="header__contact-group">
                    <div className="header__contact">
                        <a href="tel:+79104048423"><img src={phoneIcon} alt="icon phone"></img></a>          
                        <a href="tel:+79104048423"> +7 910 404 84 23</a>
                    </div>
                    <div className="header__contact">
                        <a href="mailto:4STAGE@mail.ru?subject=hello!"><img src={emailIcon} alt="icon email"></img></a>                        
                        <a href="mailto:4STAGE@mail.ru?subject=hello!"> 4STAGE@mail.ru</a>
                    </div>
                </div>
            </div>
        )
    }
}