const axios = require('axios');


const getLugarLatLng = async(parmLugar) => {

    let lugar = encodeURI(parmLugar);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ lugar }`,
        timeout: 1000,
        headers: {
            "x-rapidapi-key": "ce8ecbe499msh04ec8fdd46e705cp118d32jsndb6c9eb9a8e3"
        }
    });


    let resp = await instance.get();
    if (resp.data.Results.length === 0) throw new Error(`No hay resultados para el lugar ${ parmLugar }`);

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;


    return {
        direccion,
        lat,
        lng
    }


};

module.exports = {

    getLugarLatLng

};