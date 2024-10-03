var nota1 = parseFloat(prompt("Digite a nota da 1ª avaliação"))
var nota2 = parseFloat(prompt("Digite a nota da 2ª avaliação"))
var nota3 = parseFloat(prompt("Digite a nota da 3ª avaliação"))
var media

media = (nota1 + nota2) / 2

alert("A média do aluno é : " + media)

if (media >= 6){
 alert("ALUNO APROVADO!")
} else {
 alert("ALUNO REPROVADO!")
}