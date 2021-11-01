import { ProGallery } from 'pro-gallery';
import 'pro-gallery/dist/statics/main.css';
import './photoGallery.css';
import photoGaleryJSON from '../../photoGalery.json';

export default function Gallery() {
    const itemsCount = 12;

    const getItems = (itemsCount) => {
        let newItems = [];
        for (let i = 1; i < itemsCount; i++) {
                let itemData = [photoGaleryJSON.itemData];
                itemData.itemId = `${photoGaleryJSON.itemData.itemId}-${i}`;
                itemData.mediaUrl = `${photoGaleryJSON.url}${i}.jpg`;
                itemData.title = `${photoGaleryJSON.itemData.metaData.title}-${i}`;
                newItems.push(itemData);
        }
        return newItems;
    }
    const newItems = getItems(itemsCount);
    // console.log(newItems)


// The options of the gallery (from the playground current state)
const options = {
    galleryLayout: 3,
//     cubeType: 'fit',
    hoveringBehaviour: 'NEVER_SHOW',
//     thumbnailSpacings: 5,
//     arrowsVerticalPosition: 'IMAGE_CENTER',
//     thumbnailSize: 140,
    overlayBackground: 'rgba(8,8,8,0)',
  };

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

return (
        
  <ProGallery
    items={newItems}
    options={options}
    container={container}
    eventsListener={eventsListener}
    scrollingElement={scrollingElement}
  />
);
}