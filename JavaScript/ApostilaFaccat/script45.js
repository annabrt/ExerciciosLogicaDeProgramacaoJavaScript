let codigo = parseInt(prompt("Digite o número do empregado:"))
let ano_nascimento = parseInt(prompt("Digite o ano de nascimento:"))
let ano_ingresso = parseInt(prompt("Digite o ano de ingresso na empresa:"))

let idade = 2024 - ano_nascimento
let tempo_trabalho = 2024 - ano_ingresso

alert("Idade: " + idade)
alert("Tempo de trabalho: " + tempo_trabalho)

if (idade >= 65) {
  alert("Requer aposentadoria")
} else if (tempo_trabalho >= 30) {
  alert("Requer aposentadoria")
} else if (idade >= 60) {
  alert("Requer aposentadoria")
} else if (tempo_trabalho >= 25) {
  alert("Requer aposentadoria")
} else {
  alert("Não requer aposentadoria")
}