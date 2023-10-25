var numeroA = 20;
var numeroB = 16;
var numeroC = 19;

function maiorNumero(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
}

var maior = maiorNumero(numeroA, numeroB, numeroC);

console.log(`O maior número entre os três é ${maior}.`);
