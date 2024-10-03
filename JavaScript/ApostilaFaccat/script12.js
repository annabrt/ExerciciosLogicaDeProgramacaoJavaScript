var eleitores = parseInt(prompt("Digite o numero total de eleitores :"))
var votos_brancos = parseInt(prompt("Digite o numero de votos brancos :"))
var nulos = parseInt(prompt("Digite o numero de votos nulos :"))
var validos = parseInt(prompt("Digite o numero de votos validos :"))
var percentual_brancos
var percentual_nulos 
var percentual_validos 

percentual_brancos = (votos_brancos / eleitores) * 100
percentual_nulos = (nulos / eleitores) * 100
percentual_validos = (validos / eleitores) * 100

alert("Percentual de votos brancos :" + percentual_brancos + "%")
alert("Percentual de votos nulos :" + percentual_nulos + "%")
alert("Percentual de votos validos :" + percentual_validos + "%")