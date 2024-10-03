var anos = parseInt(prompt("Digite sua idade em anos :"))
var meses = parseInt(prompt("Digite sua idade em meses :"))
var dias = parseInt(prompt("Digite sua idade em dias :"))
var total_dias

total_dias = (anos * 365) + (meses * 30) + dias

alert("Idade expressa apenas em dias :" + total_dias)
