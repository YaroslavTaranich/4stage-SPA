import React from 'react';
import closeIcon from './img/close.svg';
import './spinner.css';

const Spinner = () => {
    return (
        <div className="modal__wrapper">
        <div className="quiz__wrapper">
            <div className="quiz__close"><img src={closeIcon} alt="Закрыть"></img></div>
            <div className="quiz__header">
                <h3>Заргузка</h3>
                
            </div>
            <div className="quiz__question_body quiz__spinner">
            <div className="loadingio-spinner-spin-4gdlstwb4ju"><div className="ldio-a8t7j8uyy9n">
        <div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div>
        </div></div>
            </div>
        </div>
    </div>

    )
}

export default Spinner;



