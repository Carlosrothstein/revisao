let residencias = require('./residencias');

function remover(index) {
    residencias.splice(index,   1)
}
module.exports = {remover}