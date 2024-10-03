var numero1 = parseInt(prompt("Digite um número :"))
var numero2 = parseInt(prompt("Digite um número diferente do 1° :"))

if (numero1 < numero2){
    alert("Ordem crescente dos números digitados é :" + numero1 + " e " + numero2)
} else{
    alert("Ordem crescente dos números digitados é :" + numero2 + " e " + numero1)
}