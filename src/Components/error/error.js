import React, { Component } from 'react';
import errorIcon from './img/x.svg';


export default class ErrorQuiz extends Component {
    render() {
        return (
            <>
                <div className="quiz__header">
                    <h3>Что-то пошло не так...</h3>
                    <div className="quiz__end_title">
                        <img src={errorIcon} alt="Закрыть" className="quiz__result-icon"></img>
                        <h4>К сожалению, сервер сейчас не отвечает. Повторите попытку позднее.</h4>
                    </div>                
                </div>
                <div
                className="quiz__button_next"
                onClick={this.props.toBeginOfQuiz}
                >Пройти тест ещё раз</div>
                </>
        )
    }  
}




