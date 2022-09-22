var idade = 10;
if (idade >= 16) {
    console.log('Pode votar');
}
else {
    console.log('Não pode votar');
}

var ddd = 15;

switch (ddd) {
    case 11:
        console.log("São Paulo");
        break;
    case 21:
        console.log("Rio de Janeiro");
        break;
    default:
        console.log("ddd desconhecido");
        break;
}

var status = "";
var nota = 8;
if ( nota > 7 ) {
status = "Aprovado";
}
else {
 status = "Reprovado";
}

status = nota > 7 ? "Aprovado" : "Reprovado";

var aprovado = true;

if (aprovado) {
    console.log("Parabéns");
}

aprovado && console.log("Parabéns");

var mes = "Janeiro";

switch(mes)
{
    case "Janeiro":
    case "Fevereiro":
    case "Março":
        console.log("Verão");
        break;
    case "Abril":
    case "Maio":
    case "Junho":
        console.log("Outono");
        break;
    case "Julho":
    case "Agosto":
    case "Setembro":
        console.log("Inverno");
        break;
    case "Outubro":
    case "Novembro":
    case "Dezembro":
        console.log("Primavera");
        break;
    default:
        console.log("Mês inválido");
        break;
}