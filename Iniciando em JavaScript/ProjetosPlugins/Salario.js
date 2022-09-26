import entradaDados from 'readline-sync';
let options;

let salarioMinimo = [
    {ano: 2010, salario: 510.00},
    {ano: 2011, salario: 545.00},
    {ano: 2012, salario: 622.00},
    {ano: 2013, salario: 678.00},
    {ano: 2014, salario: 724.00},
    {ano: 2015, salario: 788.00},
    {ano: 2016, salario: 880.00},
    {ano: 2017, salario: 937.00},
    {ano: 2018, salario: 954.00},
    {ano: 2019, salario: 998.00},
    {ano: 2020, salario: 1045.00}
];

let inflacao = [
    {ano: 2010, ipca: 5.91},
    {ano: 2011, ipca: 6.50},
    {ano: 2012, ipca: 5.84},
    {ano: 2013, ipca: 5.91},
    {ano: 2014, ipca: 6.41},
    {ano: 2015, ipca: 10.67},
    {ano: 2016, ipca: 6.29},
    {ano: 2017, ipca: 2.95},
    {ano: 2018, ipca: 3.75},
    {ano: 2019, ipca: 4.31},
    {ano: 2020, ipca: 4.52}
];

let anoLabel = "Ano: ";
let salarioLabel = "Salário mínimo: ";
let crescimentoLabel = "Crescimento Salarial: ";
let ipcaLabel = "Inflação IPCA: ";
anoLabel = anoLabel.padEnd(30,'.');
salarioLabel = salarioLabel.padEnd(30,'.');
crescimentoLabel = crescimentoLabel.padEnd(30,'.');
ipcaLabel = ipcaLabel.padEnd(30,'.');
let contador = 0;

do{

    console.log("1- Listar os salários mínimos de 2010 a 2020"+
    "\n2- Listar o índice IPCA de 2010 à 2020"+
    "\n3- Comparação entre o percentual de aumento salarial e o IPCA"+
    "\n0- Sair da aplicação");
    options = entradaDados.question("Digite o numero da sua escolha: ");
    console.log(options);
    switch(options){

    case '1':
        for (contador = 0; contador < salarioMinimo.length; contador++){
            console.log(anoLabel + salarioMinimo[contador].ano);
            console.log(salarioLabel + "R$" +salarioMinimo[contador].salario);
        }

        break;
    case '2':
        for (contador = 0; contador < salarioMinimo.length; contador++){
            console.log(anoLabel + inflacao[contador].ano);
            console.log(ipcaLabel + inflacao[contador].ipca+ "%");
        }
        break;
    case '3':

        for (contador = 0; contador < salarioMinimo.length; contador++){
            var crescimento;
            if(contador > 0){
                crescimento = ((salarioMinimo[contador].salario*100)/salarioMinimo[contador-1].salario) - 100;
                crescimento = crescimento.toFixed(2)
            }else{
                crescimento = "---";
            }

            console.log(anoLabel + inflacao[contador].ano);
            console.log(ipcaLabel + inflacao[contador].ipca + "%");
            console.log(crescimentoLabel + crescimento + "%");
            console.log(salarioLabel  + "R$" +salarioMinimo[contador].salario);
        }
        
        break;
    
    case '0':

        break;
    
    }
    console.log("\n");

}while(options != 0);
