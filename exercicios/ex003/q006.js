var x1 = 0;
var x2 = 1;
var x3 = x1 + x2 * 2;
var numeroDeTermos = 3;


console.log(x1);
console.log(x2);
console.log(x3);

while (numeroDeTermos < 20) {
    x1 = x2;
    x2 = x3;
    x3 = x1 + x2 * 2;
    console.log(x3);
    numeroDeTermos++;
}
