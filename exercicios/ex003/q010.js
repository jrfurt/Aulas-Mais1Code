var k = 1;
var soma = 0;

for (let i = 0; i < 100000; i++) {
    if (i % 2 == 0) {
        soma += 4 / k;
    } else {
        soma -= 4 / k;
    }
    k += 2;
}

console.log(soma);
