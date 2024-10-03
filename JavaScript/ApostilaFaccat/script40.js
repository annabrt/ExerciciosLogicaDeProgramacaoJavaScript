let idade_homem1 = parseInt(prompt("Digite a idade do primeiro homem:"))
let idade_homem2 = parseInt(prompt("Digite a idade do segundo homem:"))
let idade_mulher1 = parseInt(prompt("Digite a idade da primeira mulher:"))
let idade_mulher2 = parseInt(prompt("Digite a idade da segunda mulher:"))

let homem_mais_velho
let homem_mais_novo;
let mulher_mais_velha
let mulher_mais_nova;


if (idade_homem1 > idade_homem2) {
  homem_mais_velho = idade_homem1
  homem_mais_novo = idade_homem2
} else {
  homem_mais_velho = idade_homem2
  homem_mais_novo = idade_homem1
}

if (idade_mulher1 > idade_mulher2) {
  mulher_mais_velha = idade_mulher1
  mulher_mais_nova = idade_mulher2
} else {
  mulher_mais_velha = idade_mulher2
  mulher_mais_nova = idade_mulher1
}

let soma = homem_mais_velho + mulher_mais_nova;
let produto = homem_mais_novo * mulher_mais_velha;

alert("A soma das idades do homem mais velho com a mulher mais nova é: " + soma)
alert("O produto das idades do homem mais novo com a mulher mais velha é: " + produto)