var macas = parseInt(prompt("Digite o número de maçãs compradas :"))
var valor

if (macas < 12) {
 valor = macas * 1.30
} else {
 valor = macas * 1.00
}

alert("O custo total da compra é: R$ " + valor)