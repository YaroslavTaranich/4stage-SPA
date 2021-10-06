import React from 'react';
import closeIcon from './img/close.svg';
import errorIcon from './img/x.svg';


const ErrorQuiz = () => {
    return (
        <div className="modal__wrapper">
        <div className="quiz__wrapper">
            <div className="quiz__close"><img src={closeIcon} alt="Закрыть"></img></div>
            <div className="quiz__header">
                <h3>Что-то пошло не так...</h3>
                <div className="quiz__end_title">
                    <img src={errorIcon} alt="Закрыть" className="quiz__result-icon"></img>
                    <h4>К сожалению, сервер сейчас не отвечает. Повторите попытку позднее.</h4>
                </div>                
            </div>
        </div>
    </div>

    )
}

export default ErrorQuiz;



