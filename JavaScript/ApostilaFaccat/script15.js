var numero_carros_vendidos = parseInt(prompt("Digite o número de carros vendidos"))
var valor_total_vendas = parseFloat(prompt("Digite o valor total das vendas"))
var salario_fixo = parseFloat(prompt("Digite o salário fixo do vendedor"))
var valor_por_carro = parseFloat(prompt("Digite o valor que o vendedor recebe por carro vendido: R$ "))
var comissao_por_vendas
var salario_final

comissao_por_vendas = valor_total_vendas * 0.05
salario_final = salario_fixo + (numero_carros_vendidos * valor_por_carro) + comissao_por_vendas

alert("O salário final do vendedor é: R$ " + salario_final)