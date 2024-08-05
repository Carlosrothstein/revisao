let residencias = require('./residencias');

function listar() {
    residencias.forEach((residencia, index) => {
        console.log(`${index + 1} Bairro: ${residencia.bairro}, Rua: ${residencia.rua}, Número: ${residencia.num}, moradores: ${residencia.moradores} `);
    });
}
module.exports = { listar }