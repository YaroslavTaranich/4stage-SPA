import React, { Component } from "react";
import validator from 'validator'; 
import './quizModal.css';
import closeIcon from './img/close.svg'
import Question from "../questions/questions";
import HowToContact from "../howToContact/howToContact";
import Spinner from "../spinner/spinner";
import ErrorQuiz from "../error/error";
import Success from "../success/succes";
export default class QuizModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: 'ask',
            currentQuestion: 0,
            date: null,
            place: null,
            format: null,
            guests: null,
            program: null,
            howToContact: null,
            contact: null,
            isValidEmail: null,
            isValidPhone: null            
        }
    }

    hideModalByDisplay = (event) => {    
        if (event.target.classList.contains('close')){
            this.setState({
                display: false
            })
        }
    }

    nextQ = (questionsLenght) => {
        this.setState({
            currentQuestion: this.state.currentQuestion + 1
        });
        if (questionsLenght - 1 === this.state.currentQuestion) {
            this.setState({
                progress: 'contact'
            })
        }
    };
    updateData = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    updateContact = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onChooseSocial = (social) => {
        this.setState({
            howToContact: social,
            isValidEmail: null,
            isValidPhone: null
        });
    }
    inputValidation = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            isValidEmail: validator.isEmail(this.state.contact),
            isValidPhone: validator.isMobilePhone(this.state.contact,['ru-RU'])
        })
    }

    sendData = (event) => {
        const formData = new FormData();
        formData.append('date', this.state.date);
        formData.append('place', this.state.place);
        formData.append('format', this.state.format);
        formData.append('guests', this.state.guests);
        formData.append('program', this.state.program);
        formData.append('howToContact', this.state.howToContact);
        formData.append('contact', this.state.contact);
        
        event.preventDefault();
        

        if(this.state.isValidEmail || this.state.isValidPhone) {
            try {
                fetch('send.php', { method: 'POST', body: formData })
                .then((response) => {
                    this.setState({
                        progress: 'loading'
                    })
                    console.log(this.state)
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
    }

    toBeginOfQuiz = () => {
        this.setState({
            currentQuestion: 0,
            progress: "ask",
            date: null,
            place: null,
            format: null,
            guests: null,
            program: null,
            howToContact: null,
            contact: null,
            isValidEmail: null,
            isValidPhone: null 
        })
    }

   
    render () {
      

        const {currentQuestion, progress, date, place, format, guests, program, howToContact, isValidEmail, isValidPhone} = this.state;

        const question = progress === 'ask' ? 
                <Question 
                updateData={this.updateData} 
                nextQ={this.nextQ} 
                currentQuestion={currentQuestion} 
                date={date}
                place={place}
                format={format}
                guests={guests}
                program={program}>
                </Question> : null;

        const contacts = progress === 'contact' ? 
                <HowToContact
                updateData={this.updateData} 
                onChooseSocial={this.onChooseSocial}
                sendData={this.sendData}
                inputValidation={this.inputValidation}
                howToContact={howToContact}
                isValidEmail={isValidEmail}
                isValidPhone={isValidPhone}
                ></HowToContact> : null;
        
        const loading = progress === 'loading' ?  <Spinner></Spinner> : null;
        const success = progress === 'success' ? 
                <Success
                toBeginOfQuiz={this.toBeginOfQuiz}
                ></Success> : null;
        const errorQuiz = progress === 'error' ? 
                <ErrorQuiz
                toBeginOfQuiz={this.toBeginOfQuiz}
                ></ErrorQuiz> : null;
        const displayClass = this.props.display ? null : "d-none";
        document.body.style.overflow = this.props.display ? "hidden" : "";
        return (
            <div 
            className={displayClass + " modal__wrapper close"}
            onClick={this.props.toggleModalQuiz}
            >
                <div className="quiz__wrapper">
                    <div className="quiz__close"><img className="close" src={closeIcon} alt="Закрыть"></img></div>
                    {question}
                    {contacts}
                    {loading}
                    {success}
                    {errorQuiz} 
                </div>
            </div>

            )
    }
}
