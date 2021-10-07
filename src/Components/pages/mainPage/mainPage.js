import { Component } from "react";
import QuizModal from "../../quizModal/quizModal";
import './mainPage.css';

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
                <div className="main_page__text">
                     <h1>Техническое обеспечение
                    мероприятий Под ключ</h1>
                    <p>Работаем на мероприятиях от детского утренника до Дня Города</p>
                    <div 
                    className="main-page__button-quiz"
                    onClick={this.toggleModalQuiz}
                    >Рассчитать стоимость</div>
                </div>  

            </div>

            </>
        ) 
    }
}