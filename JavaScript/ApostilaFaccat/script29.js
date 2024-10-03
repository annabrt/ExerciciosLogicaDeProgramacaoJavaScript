let numero_conta = parseInt(prompt("Digite o número da conta do cliente :"))
   let saldo = parseFloat(prompt("Digite o saldo da conta :  R$ "))
   let debito = parseFloat(prompt("Digite o valor do débito:  R$ "))
   let credito = parseFloat(prompt("Digite o valor do crédito :  R$ "))
   let saldo_atual

   if (saldo_atual >= 0){
    alert("Saldo Positivo")
   } else{
    alert("Saldo Negativo")
   }