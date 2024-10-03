percentual_distribuidor = 0.28
percentual_impostos = 0.45

var custo_fabrica = parseFloat(prompt("Digite o custo de fábrica do carro :"))
var custo_final
var percentual_distribuidor
var percentual_impostos

custo_final = custo_fabrica + (custo_fabrica * percentual_distribuidor) + (custo_fabrica * percentual_impostos)

alert("O custo final ao consumidor do carro é: " + custo_final)