let residencias = require('./residencias');

function editar(index, novaResidencia) {
    residencias[index] = novaResidencia;
}
module.exports = {editar}