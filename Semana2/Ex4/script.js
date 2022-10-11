let number = Number(prompt("Digite um número"))
let soma = 0

while (number != -1) {
    soma += number
    number = Number(prompt("Digite um número"))
}

if (number === -1) {
    alert(`${soma}`)
}