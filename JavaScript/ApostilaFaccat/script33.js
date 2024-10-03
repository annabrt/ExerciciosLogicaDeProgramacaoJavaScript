let valor1 = parseFloat(prompt("Digite o primeiro valor: "));
let valor2 = parseFloat(prompt("Digite o segundo valor: "));
let valor3 = parseFloat(prompt("Digite o terceiro valor: "));
let maior1, maior2;

if (valor1 > valor2) {
    if (valor1 > valor3) {
        maior1 = valor1;
        if (valor2 > valor3) {
            maior2 = valor2;
        } else {
            maior2 = valor3;
        }
    } else {
        maior1 = valor3;
        maior2 = valor1;
    }
} else {
    if (valor2 > valor3) {
        maior1 = valor2;
        if (valor1 > valor3) {
            maior2 = valor1;
        } else {
            maior2 = valor3;
        }
    } else {
        maior1 = valor3;
        maior2 = valor2;
    }
}

let soma = maior1 + maior2;

alert("A soma dos dois maiores valores é: " + soma)