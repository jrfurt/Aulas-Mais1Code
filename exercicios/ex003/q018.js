var nomes = ['Edivaldo', 'Aristides', 'Ana', 'Maria', 'Jonas'];
let nomeEspecifico = 'Ana';
let tamanhoDoArray = nomes.length;
let achei = false;

for (let i = 0; i < tamanhoDoArray; i++) {
    if (nomeEspecifico == nomes[i]) {
        achei = true;
    }
}

if (achei == true) {
    console.log(`O nome ${nomeEspecifico} está na lista.`)
} else {
    console.log(`O nome ${nomeEspecifico} não está na lista.`)
}
