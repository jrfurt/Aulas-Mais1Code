var numeros = [0, 12, 2, 5];
var multiplicador = 3;

function multiplicarArray(nums, multi) {
    var arrayDosProdutos = [];
    let tamanhoDoArray = nums.length;
    for (let i = 0; i < tamanhoDoArray; i++) {
        arrayDosProdutos[i] = nums[i] * multi;
    }

    return arrayDosProdutos;
}

console.log(multiplicarArray(numeros, multiplicador));
