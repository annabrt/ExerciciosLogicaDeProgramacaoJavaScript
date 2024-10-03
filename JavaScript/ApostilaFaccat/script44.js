let N1 = parseFloat(prompt("Digite a nota da primeira verificação:"))
let N2 = parseFloat(prompt("Digite a nota da segunda verificação:"))
let N3 = parseFloat(prompt("Digite a nota da terceira verificação:"))
let Media_dos_Exercicios = parseFloat(prompt("Digite a média dos exercícios:"))

let Media_de_Aproveitamento = (N1 + (N2 * 2) + (N3 * 3) + Media_dos_Exercicios) / 7
let conceito

if (Media_de_Aproveitamento >= 9.0) {
  conceito = "A"
} else if (Media_de_Aproveitamento >= 7.5) {
  conceito = "B"
} else if (Media_de_Aproveitamento >= 6.0) {
  conceito = "C"
} else {
  conceito = "D"
}

alert("Média de Aproveitamento: " + Media_de_Aproveitamento)
alert("Conceito: " + conceito)