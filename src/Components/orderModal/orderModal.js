import { Component } from "react";
import closeIcon from './img/close.svg';
import nameIcon from './img/name.svg';
import phoneIcon from './img/phone.svg';
import fileIcon from './img/file.svg';
import './orderModal.css';
import Spinner from "../spinner/spinner";
import Success from "../success/succes";
import ErrorLoading from "../error/error";

export default class OrderModal extends Component{
    constructor(props) {
        super(props);
        this.state = {
            progress: "form",
            fileName: null
        }
    }    

    componentDidMount() {
        document.body.style.overflow = 'hidden';
    }
    componentWillUnmount() {
        document.body.style.overflow = '';
    }

    getFileName = (e) => {
        this.setState({fileName: e.target.files[0].name})
    }

    formRefresh = () => {
        this.setState({progress: "form"});
    }

    sendData = (e) => {
        e.preventDefault();
         const formData = new FormData(e.target.form);
         try {
            fetch('send.php', { method: 'POST', body: formData })
            .then((response) => {
                this.setState({
                    progress: 'loading'
                })
                // console.log(this.state)
                if(response.ok) {
                this.setState({
                    progress: 'success'
                })
                } else {
                this.setState({
                    progress: 'error'
                })
            }
            });
        } catch (error) {
            console.log(error);
        }
    }
    render(){
        const {title} = this.props.modalData;
        const {progress} = this.state;
        const orderForm = progress === "form" ?

        <form
            className="order-form"
            autoComplete='on'
            onSubmit={this.sendData}>
                <label className="input-label" htmlFor="name-order">Введите Ваше имя:</label>
                <div className="order-input">
                    <img src={nameIcon} alt="name icon"/>
                    <input id="name-order" name="name-order" type="name" placeholder="Иван Петров"/>
                </div>
                <label className="input-label" htmlFor="tel-order">Введите Ваш номер телефна:</label>
                <div className="order-input">
                    <img src={phoneIcon} alt="tel icon"/>
                    <input id="tel-order" name="tel-order" type="tel" placeholder="89991234567"/>
                </div>
                <label className="input-label" htmlFor="comment-order">Комментарий к заказу:</label>
                <div className="order-input">
                    <textarea id="comment-order" name="comment-order" type="tel"/>
                </div>
                <label className="input-label" >Можете прикрепить файл с техническим заданием или райдером артиста:</label>
                <div className="order-input">
                    <div className="order-file-input">
                        <img src={fileIcon} alt="file icon"/>
                        <label className="input-label-file" htmlFor="input-file">Загрузить файл</label>
                        <input id="input-file" name="input-file" type="file" accept="image/*, .pdf, .doc, .docx, .txt, .xls, xlsx"
                        onChange={this.getFileName}/>
                       <div className="input-file-name">{this.state.fileName}</div>
                    </div>
                </div>
                <input 
                type="submit"
                className="order-button"
                value="Отправить"
                />
            </form>
         : null;

        const loading = progress === 'loading' ?  <Spinner/> : null;
        const success = progress === 'success' ? <Success/> : null;
        const errorModal = progress === 'error' ? 
                <ErrorLoading
                formRefresh={this.formRefresh}
                /> : null;

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
                {orderForm}
                {loading}
                {success}
                {errorModal}
                </div>
            </div>
        )
    }
}

