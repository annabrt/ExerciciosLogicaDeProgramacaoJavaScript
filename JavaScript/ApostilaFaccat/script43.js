let nome = prompt("Digite a descrição do produto:");
let quantidade = parseInt(prompt("Digite a quantidade adquirida:"))
let preco_unitario = parseFloat(prompt("Digite o preço unitário:"))

let total = quantidade * preco_unitario
let desconto

if (quantidade <= 5) {
  desconto = total * 0.02
} else if (quantidade <= 10) {
  desconto = total * 0.03 
} else {
  desconto = total * 0.05
}

let total_a_pagar = total - desconto

alert("Produto: " + nome);
alert("Total antes do desconto: R$ " + total)
alert("Desconto: R$ " + desconto)
alert("Total a pagar: R$ " + total_a_pagar)