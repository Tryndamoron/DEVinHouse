let operation = prompt("Qual o cálculo que você deseja fazer? Inputs válidos: +, -, *, /")
let number1 = Number(prompt("Qual o primeiro número?"))
let number2 = Number(prompt("Qual o segundo número?"))

switch (operation) {
    case "+":
        alert(number1 + number2)
        break;
    case "-":
        alert(number1 - number2)
        break
    case "*":
        alert(number1 * number2)
        break
    case "/":
        alert(number1 / number2)
        break
    default:
        alert("Operador não reconhecido, por favor, recarregue a página e tente novamente")
}