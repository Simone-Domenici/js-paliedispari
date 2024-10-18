const evenOrOdd = prompt('Scegli pari o dispari')
const userNumber = parseInt(prompt('Scegli un numero da 1 a 5'))

const compNumber = parseInt(Math.random() * 5 + 1)
console.log(evenOrOdd, userNumber, compNumber)