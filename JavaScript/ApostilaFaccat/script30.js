let quantidade_atual = parseFloat(prompt("Digite a quantidade atual em estoque :"))
let quantidade_maxima = parseFloat(prompt("Digite a quantidade máxima em estoque :"))
let quantidade_minima = parseFloat(prompt("Digite a quantidade miníma em estoque :"))
let quantidade_media

quantidade_media = (quantidade_maxima + quantidade_minima) / 2

alert("A quantidade média é: " + quantidade_media)

if (quantidade_atual >= quantidade_media) {
    alert("Não efetuar compra")
} else {
    alert("Efetuar compra")
}