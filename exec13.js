//13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

const prompt = require('prompt-sync')()


let soma = 0, contador = 0;

let numero;

do {
    numero = parseFloat(prompt("Digite um número (0 para sair):"));
    if (numero !== 0) {
        soma += numero;
        contador++;
    }
} while (numero !== 0);

if (contador > 0) {
    console.log(`A média dos números digitados é: ${(soma / contador).toFixed(2)}`);
} else {
    console.log("Nenhum número foi inserido.");
}
