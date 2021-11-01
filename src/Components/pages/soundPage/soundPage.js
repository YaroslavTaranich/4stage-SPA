import ListItemsToPages from '../../listItemsToPages/listItemsToPages';
import '../itemsPages.css';
import sound1 from './img/sound1.jpg';
import soundCover from './img/sound-cover.JPG'
import soundChastnoe from './img/soundChastnoe.JPG'
import { Component } from 'react';



// const turbosound = {
//     title: 'Комплект звука для конференции',
//     imgURL: sound1,
//     discription: 'Компактный комплект для нескольких спикеров в небольшом зале.',
//     setup: [
//         "Turbosound inspire ip2000",
//         "Mackie DL1608",
//         "Радиосистемы Shure QLXD",
//         "Работа звукорежесёра",
//         "Доставка и монтаж"
//     ]
// }

const SoundAPI = [

    {
        title: 'Комплект звука для частного мероприятия',
        imgURL: soundChastnoe,
        discription: 'Подойдёт для озвучивания зала ресторана, небольшой сцены.',
        listTitle: 'В комлект входит:',
        setup: [
            "Акустическая система Nexo PS15 + RS15",
            "Портальный усилитель NXAMP 4x4",
            "Мониторы D&B audiotechnik M4",
            "Мониторный усилитель D&B audiotechnik D12",
            "Микрофоны Shure QLXD",
            "Dj-оборудование Pioneer CDJ-900, DJM-900 Nexus",
            "Работа звукорежесёра",
            "Доставка и монтаж"
        ]
    },
    {
        title: 'Комплект звука для выступления кавер-группы',
        imgURL: soundCover,
        discription: 'Удовлетворит требования большинства кавер-групп.',
        listTitle: 'В комлект входит:',
        setup: [
            "Акустическая система Nexo PS15 + RS15",
            "Портальный усилитель NXAMP 4x4",
            "Мониторы D&B audiotechnik M4",
            "Мониторный усилитель D&B audiotechnik D12",
            "In-ear системы Sennheiser IEM G3",
            "Барабанная установка Tama StarClassic, Ziljian A-custom",
            "Fender Hot Rod D'Lux",
            "Mark Bass Standard 104HF",
            "Комплект микрофонов Shure",
            "Работа звукорежесёра",
            "Доставка и монтаж"
        ]
    },
    {
        title: 'Комплект звука для выступления артиста',
        imgURL: sound1,
        discription: 'Прикрепите к заказу технический райдер артиста и мы подберём всё необходимое оборудование.',
        listTitle: 'В комлект входит:',
        setup: [
            "Портальная акустическая система согласно райдера",
            "Мониторная акустическая система согласно райдера",
            "Цифровой микшерный пульт согласно райдера",
            "Backline согласно райдера",
            "Работа звукорежесёра",
            "Доставка и монтаж"
        ]
    },

];


export default class SoundPage extends Component {

    render() {

        return (
            <div className='items-list__page container'>
                <h1>Комплекты звукового оборудования</h1>
                <ListItemsToPages
                API={SoundAPI}
                showOrderModal={this.props.showOrderModal}
                ></ListItemsToPages>
            </div>
        )
    }
}

