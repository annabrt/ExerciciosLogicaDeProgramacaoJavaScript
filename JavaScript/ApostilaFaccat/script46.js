let a = parseFloat(prompt("Digite o comprimento do lado a:"))
let b = parseFloat(prompt("Digite o comprimento do lado b:"))
let c = parseFloat(prompt("Digite o comprimento do lado c:"))

if (a < (b + c) && b < (a + c) && c < (a + b)) {
 
  if (a === b && b === c) {
    alert("Triângulo Equilátero")
  } else if (a === b || b === c || a === c) {
    alert("Triângulo Isósceles")
  } else {
    alert("Triângulo Escaleno")
  }
} else {
  alert("Não é possível formar um triângulo")
}