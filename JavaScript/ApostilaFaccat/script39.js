let litros = parseFloat(prompt("Digite a quantidade de litros vendidos:"))
let combustivel = prompt("Digite o tipo de combustível (A-álcool, G-gasolina):")

let preco_por_litro
let desconto
let valor_bruto
let valor_final

if (combustivel === "A") {
  preco_por_litro = 2.90
  if (litros <= 20) {
    desconto = 0.03
  } else {
    desconto = 0.05
  }
} else if (combustivel === "G") {
  preco_por_litro = 3.30
  if (litros <= 20) {
    desconto = 0.04
  } else {
    desconto = 0.06
  }
} else {
  alert("Tipo de combustível inválido!")
  
}

valor_bruto = litros * preco_por_litro;
valor_final = valor_bruto - (valor_bruto * desconto);

alert("O valor a ser pago pelo cliente é: R$ " + valor_final);