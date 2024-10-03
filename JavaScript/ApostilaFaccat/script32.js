let valor1 = parseFloat(prompt("Digite o 1° valor :"))
let valor2 = parseFloat(prompt("Digite o 2° valor :"))
let valor3 = parseFloat(prompt("Digite o 3° valor :"))

if (valor1 > valor2) {
    if (valor1 > valor3) {
        alert("O maior valor é: " + valor1);
    } else {
        alert("O maior valor é: " + valor3);
    }
} else {
    if (valor2 > valor3) {
        alert("O maior valor é: " + valor2);
    } else {
        alert("O maior valor é: " + valor3);
    }
}