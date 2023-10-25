var numeroDoUsuario = 9;

var x1 = 0;
var x2 = 1;
var x3 = x1 + x2;


console.log(x1);
console.log(x2);
console.log(x3);

while (x3 <= numeroDoUsuario) {
    x1 = x2;
    x2 = x3;
    x3 = x1 + x2;
    console.log(x3);
}
