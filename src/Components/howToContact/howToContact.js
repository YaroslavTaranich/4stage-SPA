import React, { Component } from "react";
import closeIcon from './img/close.svg';


export default class HowToContact extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    renderSocialButtonsAndInputs = () => {
        
        const buttons = {
            names: ['TELEGRAM', 'WHATSUP', 'EMAIL'],
            imgs: [
            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="telegram-plane" className="svg-inline--fa fa-telegram-plane fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path></svg>,
            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="whatsapp" className="svg-inline--fa fa-whatsapp fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>,
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="envelope" className="svg-inline--fa fa-envelope fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path></svg>
            ]
        }
        
        const activeClass = 'quiz__social_tab-active';

        return (
        <form
        onSubmit={this.props.sendData}
        >
            <div className="quiz__social_tab_wrapper">
            {buttons.names.map((name, i) => {
                return(       
                    <div
                    className={((this.props.howToContact === name ? activeClass : '')) + ` quiz__social_tab`}
                    onClick={() => this.props.onChooseSocial(name)}
                    key={name}    
                    >
                        <div className="quiz_icon">
                            {buttons.imgs[i]}
                        </div>
                        <div>{name}</div>
                    </div>
                    )
                })
            }
        </div>
        <div className="quiz__warning-validation">
                {(this.props.isValidPhone === false && this.props.howToContact !== 'EMAIL') ? 'Введите ваш номер телефона в формате 89991234567': ''}
                {(this.props.isValidEmail === false && this.props.howToContact === 'EMAIL') ? 'Введите ваш email в формате example@mail.ru' : ''
                }
            </div>  
            <div className="quiz__form-phone">
         
                <input
                name="contact"
                type={(this.props.howToContact === 'EMAIL') ? 'email' : 'tel'}
                placeholder={(this.props.howToContact === 'EMAIL') ? 'Введите ваш email' : 'Введите ваш номер телефона'}
                className="quiz__phone-input"
                onChange={this.props.updateData}
                ></input>
                <input
                onClick={this.props.inputValidation}
                type='submit'
                value='ПОЛУЧИТЬ'
                className="quiz__phone-submit"
                >
                </input>
            </div>
        </form>     
        )
    }
     render() {

         return (
            <div className="modal__wrapper">
                <div className="quiz__wrapper">
                    <div className="quiz__close"><img src={closeIcon} alt="Закрыть"></img></div>
                    <div className="quiz__header_end">
                        <p className='quiz__end'>Завершение теста</p>
                    </div>
                    <div className="quiz__end_title">
                        <h4>По результатам нашего теста, мы уже рассчитываем для вас стоимость аренды. Куда нам отправить результаты?</h4>
                        {this.renderSocialButtonsAndInputs()}
                        
                    </div>
                    

                </div>
            </div>
         )
         
     }
}