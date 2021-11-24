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
            fileName: null,
            nameOrder: "",
            telOrder: "",
            commentOrder: "",
            file: undefined
        }
    }    

    componentDidMount() {
        document.body.style.overflow = 'hidden';
    }
    componentWillUnmount() {
        document.body.style.overflow = '';
    }

    getFile = (e) => {
        this.setState({
            fileName: e.target.files[0].name,
            [e.target.name] : e.target.files[0]
        })
    }

    formRefresh = () => {
        this.setState({progress: "form"});
    }
    inputHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
 
    sendData = (e) => {
        e.preventDefault();
        const fileInput = document.getElementById("input-file")
        const formData = new FormData();
        formData.append('name', this.state.nameOrder);
        formData.append('fileName', this.state.fileName);
        formData.append('phone', this.state.telOrder);
        formData.append('comment', this.state.commentOrder);
        formData.append('file', fileInput.files[0]);
        formData.append('orderTitle', this.props.modalData.title)
        console.log(this.state);
        console.log(formData.get("file"));
         try {
            fetch('https://4stage.ru/send.php', { method: 'POST', body: formData })
            .then((response) => {
                this.setState({
                    progress: 'loading'
                })
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
                    <input 
                    required
                    id="name-order" 
                    name="nameOrder"
                    value={this.state.nameOrder}
                    onChange={this.inputHandler} 
                    type="name" 
                    placeholder="Иван Петров"/>
                </div>
                <label className="input-label" htmlFor="tel-order">Введите Ваш номер телефна:</label>
                <div className="order-input">
                    <img src={phoneIcon} alt="tel icon"/>
                    <input 
                    required
                    id="tel-order" 
                    name="telOrder"
                    value={this.state.telOrder}
                    onChange={this.inputHandler} 
                    type="tel" 
                    placeholder="89991234567"/>
                </div>
                <label className="input-label" htmlFor="comment-order">Комментарий к заказу:</label>
                <div className="order-input">
                    <textarea 
                    id="comment-order" 
                    name="commentOrder"
                    value={this.state.commentOrder}
                    onChange={this.inputHandler} 
                    type="text"/>
                </div>
                <label className="input-label" >Можете прикрепить файл с техническим заданием или райдером артиста:</label>
                <div className="order-input">
                    <div className="order-file-input">
                        <img src={fileIcon} alt="file icon"/>
                        <label className="input-label-file" htmlFor="input-file">Загрузить файл</label>
                        <input 
                        id="input-file" 
                        name="file" 
                        type="file"
                        accept="image/*, .pdf, .doc, .docx, .txt, .xls, xlsx"
                        onChange={this.getFile}/>
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

