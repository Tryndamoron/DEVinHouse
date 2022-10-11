let number = Number(prompt("Digite aqui um número"));
let even = 0;
let odd = 0;

function evenodd(number) {
  for (var i = 0; i <= number; i++) {
    if (i % 2 == 0) {
      even++;
    } else {
      odd++;
    }
  }
 alert(`A quantidade de ímpares é: ${odd} e a quantidade de pares é: ${even}`)}


evenodd(number);
