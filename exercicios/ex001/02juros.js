var capital = 1000;
var taxaDeJuros = 0.24;
var tempo = 4;

var juroSimples = capital * taxaDeJuros * tempo;
var montante = capital + juroSimples;

console.log(montante);