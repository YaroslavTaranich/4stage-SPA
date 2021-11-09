import React, { Component } from "react";

export default class Question extends Component {

    renderQuestion = (question) => {
        if (question.type === 'date') {
            return (
                <input 
                type='date' 
                name='date'
                className='quiz__text_input'
                onChange={this.props.updateData} 
                />
            )
        } 
        if (question.type === 'radio') {
            return (
                <div className='radio__wrapper'>                     
                    {question.inputValues.map((value, i) => {
                        return(
                            <div className="radio" key={this.props[question.inputName] + i}>   
                                <label className={"custom-radio"}>
                                    <input
                                    type="radio"
                                    name={question.inputName}
                                    value={value}
                                    checked={this.props[question.inputName] === value}
                                    onChange={this.props.updateData} 
                                    />
                                    <span>{question.inputTitles[i]}</span>
                                </label>
                            </div>
                            )
                        }
                    )}
                </div>          
            )
        }
    };


    render () {
        const questions = [
            {
                title: "Дата мероприятия",
                type: 'date'
            },
            {
                title: "Место проведения",
                type: 'radio',
                inputName: "place",
                inputValues: ["moskva", "20km", "50km", "faraway"],
                inputTitles: ["Москва", "До 20 км", "От 20 до 50 км", "Более 50км"],
            },
            {
                title: 'Формат мероприятия',
                type: 'radio',
                inputName: "format",
                inputValues: ["b-day", "corporativ", "wedding", "presetatio", "outdoor", "another"],
                inputTitles: ["День рождения", "Корпоратив", "Свадьба", "Презентация", "Уличное мероприятие", "Другое"],
            },
            {
                title: 'Количество гостей',
                type: 'radio',
                inputName: "guests",
                inputValues: ["50", "100", "200", "500", "more"],
                inputTitles: ["До 50", "От 50 до 100", "От 100 до 200", "От 200 до 500", "Более 500"],
            },
            {
                title: 'Программа мероприятия',
                type: 'radio',
                inputName: "program",
                inputValues: ["liveSound", "dance", "fon", "presetatio", "another"],
                inputTitles: ['Выступление "Живых коллективов"', "Дискотека", "Фоновая музыка", "Презентация", "Другое"],
            },
        ];
        
        const buttonLabel = {
            next: "Следующий вопрос",
            last: "Перейти к завершению теста"
        };

        const {currentQuestion} = this.props;

        return (
            <>
                <div className="quiz__header">
                    <h3>Рассчитать стоимость</h3>
                    <p className='quiz__question_counter'>Вопрос {currentQuestion + 1} из {questions.length}</p>
                </div>
                <div className="quiz__question_body">
                    <h4>{questions[currentQuestion].title}</h4>
                    {this.renderQuestion(questions[currentQuestion])}

                </div>
                <div 
                className='quiz__button_next'
                onClick={() => {this.props.nextQ(questions.length)}}                    
                >
                    {questions.length - 1 > currentQuestion ? buttonLabel.next : buttonLabel.last}
                </div>
            </>
        )
    }

}