export default class StageService {

    // getResourse = async (url) => {
    //     const res = await fetch (`${this._apiBase}${url}`);
    //     if(!res.ok) {
    //         throw new Error(`Not fetching url: ${url}; status: ${res.status}`)
    //     }    
    //     return await res.json();    
    // };

    postData = async (url, data) => {
        const res = await fetch (url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        });
        return await res.json();
    }
    
}