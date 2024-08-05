const prompt = require('prompt-sync')();
const {listar} = require('./listar')
const {adicionar} = require('./adicionar')
const {editar} = require('./editar')
const {remover} = require('./remover')

function exibirMenu() {
    console.log(`
    1. Adicionar
    2. Listar
    3. Editar
    4. Remover
    5. Sair
    `)
    let opcao = prompt('Escolha uma opção: ')
    let index;
    switch (opcao) {
        case '1':
            let bairro = prompt('bairro: ');
            let rua = prompt('rua: ');
            let num = prompt('número: ');
            let moradores = prompt('morador: ');
            adicionar({bairro, rua, num, moradores});
            console.log('Residencia adicionada com sucesso. ');
            exibirMenu();
            break;

        case '2':
            listar();
            exibirMenu();
            break;

        case '3':
            listar();
            index = parseInt(prompt('Número da casa para atualizar: ')) - 1;
            let novoBairro = prompt('Novo bairro: ');
            let novaRua = prompt('Nova rua: ');
            let novoNum = prompt('Novo número: ');
            let novoMorador = prompt('Novo morador: ');
            editar(index, {bairro: novoBairro, rua: novaRua, num: novoNum, moradores: novoMorador});
            console.log('Residencia atualizada com sucesso. ');
            exibirMenu();
            break;
        case '4':
            index = parseInt(prompt('Número da casa para remover: ')) - 1;
            remover(index)
            console.log('Residencia removida com sucesso. ')
            exibirMenu();
            break;
        case '5':
            break;
        default:
            console.log('Opção inválida. ')
            break;
    }

}
exibirMenu()