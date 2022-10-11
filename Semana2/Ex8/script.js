//write a number that verifies all numbers between 0 an 1000 and if a number is prime, and if it is, increase the count of prime numbers by 1. If it is not, do nothing. Then, show how many prime numbers in an alert box

let count = 0
for (let i = 0; i < 1001; i++) {
    if (isPrime(i)) {
        count++
    }
}
alert(count-2)

function isPrime (number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false
        }
    }
    return true
}