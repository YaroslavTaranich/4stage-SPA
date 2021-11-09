import { Component } from "react";
import { Link } from "react-router-dom";
import PhotoGallery from "../../photoGallery/photoGallery";
import QuizModal from "../../quizModal/quizModal";
import './mainPage.css';
import sound from './img/sound.jpg';
import svet from './img/svet.jpg';
import video from './img/video.jpg';
import stage from './img/stage.jpg';
import PicsWithLink from "../../picsWithLink/picsWithLink";

export default class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false,          
        }
    }

    toggleModalQuiz = (event) => {
        if (event.target.classList.contains('close')){
            this.setState({
                display: false
            })
        } else {
            this.setState({
                display: true
            })
        }
    }
    
    render() {

        return(
            <>
            <QuizModal
            display={this.state.display}
            toggleModalQuiz={this.toggleModalQuiz}
            ></QuizModal>
            <div className="container main_page">
                <div className="main_page__heroes">
                    <div className="main_page__text">
                        <h1>Техническое обеспечение
                        мероприятий Под ключ</h1>
                        <p>Работаем на мероприятиях от детского утренника до Дня Города</p>
                        <div 
                        className="main-page__button-quiz"
                        onClick={this.toggleModalQuiz}
                        >Рассчитать стоимость</div>
                    </div>
                    <div className="main_page__apparat">
                        <div className="apparat-hero">
                            <img src={sound} alt="sound pic"></img>
                            <Link to="/zvuk/">Звуковое оборудование</Link>
                        </div>
                        <div className="apparat-hero">
                            <img src={svet} alt="sound pic"></img>
                            <Link to="/svet/">Световое оборудование</Link>
                        </div>
                        <div className="apparat-hero">
                            <img src={video} alt="sound pic"></img>
                            <div 
                            className="apparat-hero-title"
                            onClick={() => this.props.showOrderModal({title: "видео обородование"})}
                            >Видео и Экраны</div>
                        </div>
                        <div className="apparat-hero">
                            <img src={stage} alt="sound pic"></img>
                            <Link to="/stage/">Сценические конструкции</Link>
                        </div>
                    </div>  
                </div>
                <PicsWithLink
                showOrderModal={this.props.showOrderModal}
                />
                <div className="photo__gallery">
                    <h3>Наши мероприятия</h3>
                    <PhotoGallery></PhotoGallery>
                </div>
            </div>
            </>
        ) 
    }
}