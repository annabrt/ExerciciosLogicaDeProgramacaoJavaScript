var salario_atual = parseFloat(prompt("Digite o salário mensal atual do funcionário :"))
var percentual_reajuste = parseFloat(prompt("Digite o percentual de reajuste :"))
var novo_salario

novo_salario = salario_atual + (salario_atual * (percentual_reajuste / 100))

alert("O novo salário do funcionário é: " + novo_salario)