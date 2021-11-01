import { Component } from 'react';
import ListItemsToPages from '../../listItemsToPages/listItemsToPages';
import '../itemsPages.css';
import chastnoe from './img/chastnoe-light-2.jpg';
import denGoroda from './img/den-goroda-light-2.jpg';
import artist from './img/artist.JPG';
import arcLight from './img/arc-light.jpg';

const lightAPI = [

    {
        title: 'Комплект света для частного мероприятия',
        imgURL: chastnoe,
        discription: 'Красивая подсветка зала для создания праздничного настроения.',
        listTitle: 'В комлект входит:',
        setup: [
            "Robe Robin 600 LEDwash",
            "Robe Pointe 12R spot beam",
            "COB Blinder 2х100",
            "LED Par Slim",
            "Involight LEDBAR395",
            'Стойка для светового оборудования "Тотем" от 1.5 до 4м',
            "Световой пульт HedgeHog4",
            "Работа художника по свету",
            "Доставка и монтаж"
        ]
    },
    {
        title: 'Комплект архитектурной подсветки',
        imgURL: arcLight,
        discription: 'Сделает простанство ярким и красочным. Возможно использование на улице.',
        listTitle: 'В комлект входит:',
        setup: [
            "Involight LEDBAR395",
            "Involight BATBAR 600 W",
            "Involight LED ARCH249 ",
            "LED Par Slim",
            "Wi-DMX",
            "Световой пульт HedgeHog4",
            "Работа художника по свету",
            "Доставка и монтаж"
        ]
    },
    {
        title: 'Комплект света для выступления артистов',
        imgURL: artist,
        discription: 'Подберём неободимый комплект по вашему техническому заданию.',
        listTitle: 'В комлект входит:',
        setup: [
            "Robe Robin 600 LEDwash",
            "Robe Pointe 12R spot beam",
            "Светодиодный стробоскоп GLP JDC1",
            "Showtec Sunstrip Active MKII",
            "COB Blinder 2х100",
            "LED Par Slim",
            "Involight LEDBAR395",
            'Стойка для светового оборудования "Тотем" от 1.5 до 4м',
            "Световой пульт HedgeHog4",
            "Работа художника по свету",
            "Доставка и монтаж"
        ]
    },
    {
        title: 'Комплект света для сцены на улице',
        imgURL: denGoroda,
        discription: 'Прикрепите к заказу технический райдер артиста и мы подберём всё необходимое оборудование.',
        listTitle: 'В комлект входит:',
        setup: [
            "Robe Robin 600 LEDwash",
            "Robe Pointe 12R spot beam",
            "Светодиодный стробоскоп GLP JDC1",
            "Showtec Sunstrip Active MKII",
            "COB Blinder 2х100",
            "LED Par Slim",
            "Involight LEDBAR395",
            "Световой пульт HedgeHog4",
            "Работа художника по свету",
            "Доставка и монтаж"
        ]
    },

];

export default class LightPage extends Component {

    render() {

        return (
            <div className='items-list__page container'>
                <h1>Комплекты светового оборудования</h1>
                <ListItemsToPages
                API={lightAPI}
                showOrderModal={this.props.showOrderModal}
                ></ListItemsToPages>
            </div>
        )
    }
}
