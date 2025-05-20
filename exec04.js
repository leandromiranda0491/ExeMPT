//4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require('prompt-sync')()

let opcao = parseInt(prompt("Escolha uma opção:\n1 - Iniciar\n2 - Configurações\n3 - Sair"));

switch(opcao) {
    case 1:
        console.log("Você escolheu Iniciar.");
        break;
    case 2:
        console.log("Você escolheu Configurações.");
        break;
    case 3:
        console.log("Você escolheu Sair.");
        break;
    default:
        console.log("Opção inválida.");
}