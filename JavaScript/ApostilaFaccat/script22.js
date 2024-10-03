var ano_atual = parseInt(prompt("Digite o ano atual"))
var ano_nascimento = parseInt(prompt("Digite o ano do seu nascimento"))
var idade 

idade = ano_atual - ano_nascimento
if (idade >= 16) {
 alert("Você já pode votar!")
} else{
 alert("Você NÃO pode votar!")
}