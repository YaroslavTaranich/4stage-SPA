import React, { Component } from 'react';
import successIcon from './img/rocket.svg'

export default class Success extends Component {
    render() {
        return (
            <>
                <div className="quiz__header">
                    <h3>Данные отправлены</h3>
                    <div className="quiz__end_title">
                        <img src={successIcon} alt="Закрыть" className="quiz__result-icon"></img>
                        <h4>По результатам нашего теста, мы уже рассчитываем для вас стоимость аренды. В ближайшее время наш менеджер свяжется с вами!</h4>
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




