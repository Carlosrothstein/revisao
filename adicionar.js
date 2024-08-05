let residencias = require('./residencias')

function adicionar(residencia) {
    residencias.push(residencia)
}
module.exports = {adicionar}