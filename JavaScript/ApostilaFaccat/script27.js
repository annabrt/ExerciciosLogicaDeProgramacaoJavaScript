let nome = prompt("Digite seu nome :")
let sexo = prompt("Digite o sexo (M ou F) :")
let altura = parseFloat(prompt("Digite a altura (em metros) :"))
let peso_ideal

if (sexo = "M"){
   peso_ideal = (72.7 * altura) - 58
} else{
   peso_ideal = (62.1 * altura) - 44.7
}

alert("O peso ideal de " + nome + " é: " + peso_ideal +" kg")