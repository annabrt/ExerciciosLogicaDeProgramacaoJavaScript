let codigo_usuario = parseInt(prompt("Digite o código do usuário :"))
let senha = parseInt(prompt("Digite a senha:"))


if (codigo_usuario !== 1234) {
  alert("Usuário inválido!")
} else {
  
  if (senha !== 9999) {
    alert("Senha incorreta");
  } else {
    alert("Acesso permitido");
  }
}