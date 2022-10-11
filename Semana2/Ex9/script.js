let number1 = Number(prompt("Digite um número"))
let root = Number(prompt("Digite a raiz"))
let finalProgression = []

function arythmeticalProgression (number1, root) {
    for (let i = 0; i < 10; i++) {
        finalProgression.push(number1)
        number1 += root
    }
    return finalProgression
}

alert(arythmeticalProgression(number1, root))