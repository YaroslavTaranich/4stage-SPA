export default class StageService {

    getFotoGaleryJSON = async () => {
        const res = await fetch ('https://4stage.ru/photoGallery/photoGallery.json');
        if(!res.ok) { 
        throw new Error("Not fatching url 'https://4stage.ru/photoGallery/photoGallery.json'" + res.status)
        }
        return await res.json();
        }
    }