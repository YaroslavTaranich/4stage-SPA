import { Component } from "react";
import './header.css';
import logo from './img/4-stage-Logo.svg';
import phoneIcon from './img/phone.svg';
import emailIcon from './img/email.svg';
import { Link } from "react-router-dom";

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayMenu: false,
        }
    }
    toggleMenu = () => {
        this.setState({
            displayMenu: !this.state.displayMenu
        })
    }
    render() {

        const activeClass = this.state.displayMenu ? 'is-active' : null;
        const showMenu = this.state.displayMenu ? ' show-menu' : null;
        document.body.style.overflow = this.state.displayMenu ? 'hidden' : ""
        return(
            <>
            <div className="header-block"></div>
            <div className="header">
                <button 
                className={activeClass + " c-hamburger c-hamburger--htx"}
                onClick={this.toggleMenu}
                >
                    <span>toggle menu</span>
                </button>
                <div className="header__logo">
                    <Link to='/'> 
                        <img src={logo} alt="logo"></img>
                    </Link>
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
            <div className={showMenu + " hidden-menu"}>
                <div className="menu-links-wrapper">
                <ul>
                    <li>
                        <Link to="/" onClick={this.toggleMenu}>Главная</Link>
                    </li>
                    <li>
                        <Link to="/zvuk" onClick={this.toggleMenu} >Звук</Link>
                    </li>
                    <li>
                        <Link to="/svet" onClick={this.toggleMenu}>Свет</Link>
                    </li>
                    <li>
                        <Link to="/stage" onClick={this.toggleMenu}>Сцена</Link>
                    </li>
                </ul>
                <div className="header__contact menu__contact">
                        <a href="tel:+79104048423"><img src={phoneIcon} alt="icon phone"></img></a>          
                        <a href="tel:+79104048423"> +7 910 404 84 23</a>
                    </div>
                    <div className="header__contact menu__contact">
                        <a href="mailto:4STAGE@mail.ru?subject=hello!"><img src={emailIcon} alt="icon email"></img></a>                        
                        <a href="mailto:4STAGE@mail.ru?subject=hello!"> 4STAGE@mail.ru</a>
                    </div>
                </div>
            </div>
            </>
        )
    }
}