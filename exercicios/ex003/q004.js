var produtoDosPrimos = 1;

for (let i = 1; i <= 20; i++) {
    let numeroDeDivisores = 0;
    for (let j = 1; j <= i; j++) {
        if (i % j == 0) {
            numeroDeDivisores++;
        }
    }
    if (numeroDeDivisores == 2) {
        produtoDosPrimos *= i;
    }
}

console.log(produtoDosPrimos);
