let valor1 = parseInt(prompt("Digite o 1° valor :"));
let valor2 = parseInt(prompt("Digite o 2° valor :"));
let valor3 = parseInt(prompt("Digite o 3° valor :"));
let temp;

if (valor1 > valor2) {
  temp = valor1;
  valor1 = valor2;
  valor2 = temp;
}

if (valor1 > valor3) {
  temp = valor1;
  valor1 = valor3;
  valor3 = temp;
}

if (valor2 > valor3) {
  temp = valor2;
  valor2 = valor3;
  valor3 = temp;
}

alert("Os valores em ordem crescente são: " + valor1 + ", " + valor2 + ", " + valor3)
  