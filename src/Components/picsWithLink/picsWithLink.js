import './picsWithLinks.css';
import { Link } from 'react-router-dom';
import zvuk from './img/zvuk_img.png';
import svet from './img/svet_img.png';
import video from './img/Video.png';
import stage from './img/Stage.png';
import { Component } from 'react';
import OrderModal from '../orderModal/orderModal';

export default class PicsWithLink extends Component {

    constructor(props) {
        super(props);
        this.state = {
            display: false,
            modalData: null          
        }
    }

    showOrderModal = (item) => {
        this.setState({
            display: true,
            modalData: item
        })
    }
    hideOrderModal = (e) => {
        if (e.target.classList.contains('close')) {
            this.setState({
                display: false
            })
        }
    }

    
    render() {

        return(
            <div className="container">
            <div className="links__title">
                <h2>Берем на себя подбор, доставку, монтаж и настройку оборудования</h2>
            </div>
            <div className="links__wrapper">
                <Link className="link-with-pic" to="/zvuk/">
                    <img src={zvuk} alt="sound pic"></img>
                    <h4>Звуковое оборудование</h4>
                    <div className="links__button">Заказать</div>
                </Link>
                <Link className="link-with-pic" to="/svet/">
                    <img src={svet} alt="sound pic"></img>
                    <h4>Световое оборудование</h4>
                    <div className="links__button">Заказать</div>
                </Link>
                <div 
                className="link-with-pic"
                onClick={() => this.props.showOrderModal({title: "видео обородование"})}

                >
                    <img src={video} alt="sound pic"></img>
                    <h4>Видео Экраны</h4>
                    <div className="links__button">Заказать</div>
                </div>
                <Link className="link-with-pic" to="/stage/">
                    <img src={stage} alt="sound pic"></img>
                    <h4>Сценические конструкции</h4>
                    <div className="links__button">Заказать</div>
                </Link>
            </div>
            </div>
        )
    }
    
}

