const axios = require('axios');

const getClima = async(lat, lng) => {

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=c4d7acc48f6bcaa13e1389fd4bd54d97&units=metric`;
    const resp = await axios.get(url);

    //if (resp.cod) throw new Error(`No hay resultados para la latidud ${ lat } y longitud ${ lng }`);

    return resp.data.main.temp;


};

module.exports = {

    getClima

};