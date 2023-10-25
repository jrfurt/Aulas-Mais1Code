var dolar = 1;
var real = 5.05;
var taxaDeCambio = 0.72 / 100;

var valorEmDolar = 10;

var conversaoParaReal = (valorEmDolar * real) - taxaDeCambio;

console.log(conversaoParaReal);