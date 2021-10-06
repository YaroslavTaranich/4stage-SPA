import React, { Component } from "react";
import validator from 'validator'; 
import './quizModal.css';
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

   
    render () {
      

        const {currentQuestion, progress, date, place, format, guests, program, howToContact, isValidEmail, isValidPhone} = this.state;



        if (progress === 'ask') {
            return (
                <Question 
                updateData={this.updateData} 
                nextQ={this.nextQ} 
                currentQuestion={currentQuestion} 
                date={date}
                place={place}
                format={format}
                guests={guests}
                program={program}>
                </Question>       
            )
        } if (progress === 'contact') {
            return(
                <HowToContact
                updateData={this.updateData} 
                onChooseSocial={this.onChooseSocial}
                sendData={this.sendData}
                inputValidation={this.inputValidation}
                howToContact={howToContact}
                isValidEmail={isValidEmail}
                isValidPhone={isValidPhone}
                ></HowToContact>
            )
        } if (progress === 'loading') {
            return(
                <Spinner></Spinner>
            )
        } if (progress === 'success') {
            return(
                <Success></Success>
            )
        } if (progress === 'error') {
            return(
                <Success></Success>
            )
        }


    }
}
