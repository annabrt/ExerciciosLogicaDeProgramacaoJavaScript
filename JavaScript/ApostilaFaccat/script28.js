let salario_fixo = parseFloat(prompt("Digite o salário fixo do vendedor :"))
let valor_vendas = parseFloat(prompt("Digite o valor total das vendas :"))

if (valor_vendas = 1500){
    comissao = valor_vendas * 0.03
} else{
    comissao = (1500 * 0.03) + ((valor_vendas - 1500) * 0.05)
}

salario_total = salario_fixo + comissao

alert("O salário total do vendedor é R$ " + salario_total)
    