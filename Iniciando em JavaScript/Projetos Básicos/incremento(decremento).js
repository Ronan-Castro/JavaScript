var contador = 5;
contador++;
console.log(contador);// contador agora vale 6

contador--;
console.log(contador);// contador agora vale 5

var numero = 9;
//estas operações modificam o valor fora da função, ou seja, numero realmente aumenta um
console.log(++numero);//aumenta antes de printar
console.log(numero++);//aumenta depois de printar
console.log(numero);