const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const getInfo = async(direccion) => {

    let temp = '';

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        temp = await clima.getClima(coords.lat, coords.lng);

    } catch (err) {

        throw new Error(`No hay resultados para la direccion ${ direccion }`);

    }

    console.log(`La temperatura de ${direccion} es ${ temp}`)

};

getInfo(argv.direccion)
    .then()
    .catch(console.log);