let hora_inicio = parseFloat(prompt("Digite a hora de início do jogo :"))
let hora_fim = parseFloat(prompt("Digite a hora do fim do jogo :"))
let duracao

if (hora_fim > hora_inicio){
 duracao = hora_fim - hora_inicio
} else{
 duracao = (24 - hora_inicio) + hora_fim
}

alert("A duração do jogo foi de " + duracao + " hora(s).")
