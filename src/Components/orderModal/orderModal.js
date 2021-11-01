import { Component } from "react";
import closeIcon from './img/close.svg';
import nameIcon from './img/name.svg';
import phoneIcon from './img/phone.svg';
import fileIcon from './img/file.svg';
import './orderModal.css';

export default class OrderModal extends Component{
    

    componentDidMount() {
        document.body.style.overflow = 'hidden';
    }
    componentWillUnmount() {
        document.body.style.overflow = '';
    }
    render(){
        const {title} = this.props.modalData;
        console.log(title);
        return(
            <div 
            className={"order-modal__wrapper close"}
            onClick={this.props.hideOrderModal}
            >
                <div className="order__wrapper">
                    <div 
                    className="order__close"
                    onClick={this.props.hideOrderModal}>
                        <img className="close" src={closeIcon} alt="Закрыть"/>  
                    </div>
                <h2>Заказать {title}</h2>
                <from
                className="order-form"
                autoComplete='on'
                onSubmit={() => {this.sendData(this.state)}}>
                    <label className="input-label" for="name-order">Введите Ваше имя:</label>
                    <div className="order-input">
                        <img src={nameIcon} alt="name icon"/>
                        <input id="name-order" name="name-order" type="name" placeholder="Иван Петров"/>
                    </div>
                    <label className="input-label" for="tel-order">Введите Ваш номер телефна:</label>
                    <div className="order-input">
                        <img src={phoneIcon} alt="tel icon"/>
                        <input id="tel-order" name="tel-order" type="tel" placeholder="89991234567"/>
                    </div>
                    <label className="input-label" for="comment-order">Комментарий к заказу:</label>
                    <div className="order-input">
                        <textarea id="comment-order" name="comment-order" type="tel"/>
                    </div>
                    <label className="input-label" >Можете прикрепить файл с техническим заданием или райдером артиста:</label>
                    <div className="order-input">
                        <div className="order-file-input">
                            <img src={fileIcon} alt="file icon"/>
                            <label className="input-label-file" for="input-file">Загрузить файл</label>
                            <input id="input-file" name="input-file" type="file" placeholder="89991234567"/>
                        </div>
                    </div>
                    <input 
                    type="submit"
                    className="order-button"
                    value="Отправить"
                    />
                </from>
                </div>
            </div>
        )
    }
}

