import React, { Component } from 'react';
import successIcon from './img/rocket.svg'

export default class Success extends Component {
    render() {
        const button = this.props.toBeginOfQuiz ? 
                    <div
                    className="quiz__button_next"
                    onClick={this.props.toBeginOfQuiz}
                    >Пройти тест ещё раз</div>
                    :
                    <div
                    className="quiz__button_next close"
                    >Закрыть</div>;
        const text = this.props.toBeginOfQuiz ? 
                    "По результатам нашего теста, мы уже рассчитываем для вас стоимость аренды. В ближайшее время наш менеджер свяжется с вами!" : 
                    "Заявка отправлена. В ближайшее время наш менеджер свяжется с вами!"
        return (
            <>
                <div className="quiz__header">
                    <h3>Данные отправлены</h3>
                    <div className="quiz__end_title">
                        <img src={successIcon} alt="Закрыть" className="quiz__result-icon"></img>
                        <h4>{text}</h4>
                    </div>
                </div>
                {button}
            </>
        )
    }  
}




