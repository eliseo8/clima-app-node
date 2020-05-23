const argv = require('yargs')
    .options({
        direccion: {
            demand: true,
            alias: 'd',
            desc: 'Direccion del pais'
        }
    })
    .argv;

module.exports = {
    argv
}