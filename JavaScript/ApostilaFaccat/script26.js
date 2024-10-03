let horas_trabalhadas = parseFloat(prompt("Digite o número de horas trabalhadas no mês :"))
let salario_por_hora = parseFloat(prompt("Digite o salário por hora: R$"))
let horas_extras
let horas_mensais
let salario_total
let salario_normal
let salario_extra

if (horas_trabalhadas > horas_mensais) {
    horas_extras = horas_trabalhadas - horas_mensais
    salario_normal = horas_mensais * salario_por_hora
    salario_extra = horas_extras * salario_por_hora * 1.50
    salario_total = salario_normal + salario_extra
} else{
    salario_total = horas_trabalhadas * salario_por_hora
}

alert("O salário total é: R$ " + salario_total)