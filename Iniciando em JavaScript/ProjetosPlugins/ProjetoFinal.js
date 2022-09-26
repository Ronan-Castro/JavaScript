import entradaDados from 'readline-sync';

console.log("Aplicação de Juros: \n");

let valor = entradaDados.question("Informe o valor devido: ");
let dias = entradaDados.question("Informe quantos dias se passaram desde o vencimento do boleto: ");


console.log("\nValor original da dívida: R$"+valor);
console.log("Dias atrasados: "+dias);
let taxaJuros;
if(dias > 15){
    taxaJuros = 1.1;
    console.log("Taxa de Juros: 10%");
}else if(dias > 0){
    taxaJuros = 1.05
    console.log("Taxa de Juros: 5%");
}
console.log("Valor total com juros: R$" + (valor * taxaJuros).toFixed(2));