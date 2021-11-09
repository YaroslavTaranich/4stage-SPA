import React, { Component } from 'react';
import errorIcon from './img/x.svg';


export default class ErrorLoading extends Component {

    render() {
        const button = this.props.toBeginOfQuiz ? 
                    <div
                    className="quiz__button_next"
                    onClick={this.props.toBeginOfQuiz}
                    >Пройти тест ещё раз</div>
                    :
                    <div
                    className="quiz__button_next"
                    onClick={this.props.formRefresh}
                    >Отправить снова</div>;
        return (
            <>
                <div className="quiz__header">
                    <h3>Что-то пошло не так...</h3>
                    <div className="quiz__end_title">
                        <img src={errorIcon} alt="Закрыть" className="quiz__result-icon"></img>
                        <h4>К сожалению, сервер сейчас не отвечает. Повторите попытку позднее.</h4>
                    </div>                
                </div>
                {button}
                </>
        )
    }  
}




