var quantidadeVagas = 2 + 5; // resultado: 7
var contratados = 7 - 2; // resultado: 5
var valorContribuicao = 2500 * 0.10; // resultado: 250
var primeiraParcela = 2500 / 2; // resultado: 1250
var resto1 = 15 % 4; // resultado: 3
var resto2 = 3 % 1.2; // resultado: 0.6
var verificaSeEPar = 20 % 2 == 0;

console.log("texto" + " e complemento");
// Vai imprimir "texto e complemento"

console.log("5" + "6");
// Vai imprimir "56"

console.log("texto" + 20); // "texto20"
console.log("texto" + true); // "textotrue"
console.log("texto" + null); // "textonull"
console.log("texto" + undefined); // "textoundefined"
console.log( [1,2,3] + 4 ) // "1,2,34"
console.log( {nome:'José'} + 1 ); // “[object Object]1”

console.log(5 + 20); // 25
console.log(5 + true); // 6
console.log(5 + null); // 5
console.log(true + true); // 2
console.log(true + null); // 1
console.log(null + null); // 0
console.log(null + false); // 0
console.log(5 + undefined); // NaN
console.log(null + undefined); // NaN