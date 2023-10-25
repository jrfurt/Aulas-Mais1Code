var numeroX = 3;

function fatorial(x) {
    for (let i = x - 1; i > 0; i--) {
        x *= i;
    }

    console.log(x);
    return;
}

fatorial(numeroX);
