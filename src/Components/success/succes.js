import React from 'react';
import closeIcon from './img/close.svg';
import successIcon from './img/rocket.svg'

const Success = () => {
    return (
        <div className="modal__wrapper">
        <div className="quiz__wrapper">
            <div className="quiz__close"><img src={closeIcon} alt="Закрыть"></img></div>
            <div className="quiz__header">
                <h3>Данные отправлены</h3>
                <div className="quiz__end_title">
                    <img src={successIcon} alt="Закрыть" className="quiz__result-icon"></img>
                    <h4>По результатам нашего теста, мы уже рассчитываем для вас стоимость аренды. В ближайшее время наш менеджер свяжется с вами!</h4>
                </div>
            </div>
        </div>
    </div>

    )
}

export default Success;



