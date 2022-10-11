let idade = Number(prompt("Qual a sua idade?"))

if (idade <= 15) {
    alert("Você é considerado jovem!")
} else if (idade > 15 && idade <= 64) {
    alert("Você é considerado um adulto! Dá pra lembrar da TV manchete já")
} else if (idade > 64) {
    alert("Você é considerado um idoso!")
}