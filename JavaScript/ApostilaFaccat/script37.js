let valor1 = parseFloat(prompt("Digite o primeiro valor:"));
let valor2 = parseFloat(prompt("Digite o segundo valor:"));

if (valor1 === valor2) {
  alert("Números iguais");
} else if (valor1 > valor2) {
  alert("O Primeiro número é maior");
} else {
  alert("O Segundo número é maior");
}