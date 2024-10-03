let A = parseFloat(prompt("Digite o valor de A:"));
let B = parseFloat(prompt("Digite o valor de B:"));
let C = parseFloat(prompt("Digite o valor de C:"));

if ((A < B + C) && (B < A + C) && (C < A + B)) {
  alert("Os valores " + A + ", " + B + " e " + C + " formam um triângulo.");
} else {
  alert("Os valores " + A + ", " + B + " e " + C + " NÃO formam um triângulo.");
}