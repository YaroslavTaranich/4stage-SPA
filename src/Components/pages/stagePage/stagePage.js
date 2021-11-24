import { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import ListItemsToPages from '../../listItemsToPages/listItemsToPages';
import '../itemsPages.css';
import stage3x4 from './img/stage-3-4-crop.jpg';
import stageArc from './img/stage-arca.jpg';
import ferms from './img/stage-ferm.jpg';
import podium from './img/stage-podium.jpg';
import lesnica from './img/stage-lestnica.jpg';

const stageAPI = [

    {
        title: 'Уличная сцена с односкатной крышей',
        imgURL: stage3x4,
        discription: 'Небольшая сцена для проведения уличных мероприятий, выступления артистов.',
        listTitle: 'Описание:',
        setup: [
            "Размер сцены 6х4 метров",
            "Монтаж на поверхности с перепадом до 30см",
            "Лестницы с любой стороны",
            "Дополнительные сценичесике модули для звукового оборудования",
            "Возможен подвес светового и видео оборудования"
        ]
    },
    {
        title: 'Уличная сцена с арочной крышей',
        imgURL: stageArc,
        discription: 'Небольшая сцена для проведения уличных мероприятий, выступления артистов.',
        listTitle: 'Описание:',
        setup: [
            "Размер сцены 6х4 метров",
            "Монтаж на поверхности с перепадом до 30см",
            "Лестницы с любой стороны",
            "Дополнительные сценичесике модули для звукового оборудования",
            "Возможен подвес светового оборудования"
        ]
    },
    {
        title: 'Конструкции из алюминиевых ферм',
        imgURL: ferms,
        discription: 'Хорошее решение для монтажа оборудования или декораций в залах, где отсутсвуют точки подвеса на потолке.',
        listTitle: 'Описание:',
        setup: [
            "Расчитывается для ваших задач по техническому заданию",
            "Подходит для подвеса светового, звукового и видео оборудования, а также монтажа декораций",
            
        ]
    },
    {
        title: 'Сценичесикий подиум с лестницей',
        imgURL: podium,
        discription: 'Сценические модули Prolyte StageDex позволяют собрать ровную поверхность необходимого размера.',
        listTitle: 'Описание:',
        setup: [
            "Любые размеры с шагом 0.5 метра",
            "Возможная высота подиума: 20см, 40см 60-90см",
            "Монтаж на поверхности с перепадом до 30см",
            
        ]
    },
    {
        title: 'Широкая лестница из сценических подиумов',
        imgURL: lesnica,
        discription: 'Сценические модули Prolyte StageDex позволяют собирать широкие лестницы, а также сложные конструкции для эфектного размещения музыкантов на сцене.',
        listTitle: 'Описание:',
        setup: [
            "Высота ступени 20см",
            "Ширина лестницы 4 метра",
            "Монтаж на ровной поверхности",
        ]
    },
];

export default class StagePage extends Component {

    render() {
        const meta = {
            title: 'Сценические конструкции в аренду в Москве',
            description: 'Аренда сценического подиума и конструкций из алюминиевых ферм для любых мероприятий. Аренда уличных сцен. Доставка и монтаж.',
            canonical: 'https://4stage.ru/stage',
            meta: {
              charset: 'utf-8',
              name: {
                keywords: 'сцена, аренда, музыка, оборудование, концерт, выстепление артистов, конструкции из ферм'
              }
            }
          };

        return (
            <DocumentMeta {...meta}>
                <div className='items-list__page container'>
                    <h1>Сценические конструкции</h1>
                    <ListItemsToPages
                    API={stageAPI}
                    showOrderModal={this.props.showOrderModal}
                    ></ListItemsToPages>
                </div>
            </DocumentMeta>
            
        )
    }
}
