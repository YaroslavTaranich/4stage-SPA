import { ProGallery } from 'pro-gallery';
import 'pro-gallery/dist/statics/main.css';
import './photoGallery.css';
import StageService from '../../services/4stageServise';
import { Component } from 'react';
// тут будет загружаться JSON файл с сервера для возмозможности редактирования количества картинок в галерее
// к галерее есть вопросы возможно буду использовать другую или писать сам



// The size of the gallery container. The images will fit themselves in it
const container = {
width: window.innerWidth,
height: window.innerHeight
};

// The eventsListener will notify you anytime something has happened in the gallery.
const eventsListener = (eventName, eventData) => {
      // console.log({eventName, eventData}); 
}

// The scrollingElement is usually the window, if you are scrolling inside another element, suplly it here
const scrollingElement = window;

export default class Gallery extends Component {

  state = {
    data: '',
    // The options of the gallery (from the playground current state)
    options: {
      galleryLayout: 3,
      cubeType: '',
      hoveringBehaviour: 'NEVER_SHOW',
      thumbnailSpacings: 5,
      arrowsVerticalPosition: 'IMAGE_CENTER',
      thumbnailSize: 140,
      overlayBackground: 'rgba(8,8,8,0)',
    }
  }
  service = new StageService();

  getItems = (data) => {
        let newItems = [];
        for (let i = 1; i < data.itemsTotal; i++) {
                let itemData = [data.itemData];
                itemData.itemId = `${data.itemData.itemId}-${i}`;
                itemData.mediaUrl = `${data.url}${i}.jpg`;
                itemData.title = `${data.itemData.metaData.title}-${i}`;
                newItems.push(itemData);
        }
        return newItems;
    }

  componentDidMount() {
    this.service.getFotoGaleryJSON()
      .then(data => {
        this.setState({
          options: data.options,
          data: this.getItems(data)
        });
        console.log(this.state.data);
      })
  }

  render() {
    return (
      <ProGallery
        items={this.state.data}
        options={this.state.options}
        container={container}
        eventsListener={eventsListener}
        scrollingElement={scrollingElement}
      />
    );
  }
}