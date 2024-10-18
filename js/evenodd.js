const evenOrOdd = prompt('Scegli pari o dispari')
const userNumber = parseInt(prompt('Scegli un numero da 1 a 5'))

function cpuNumberOneToFive() {
    const compNumber = parseInt(Math.random() * 5 + 1)
    // console.log(evenOrOdd, userNumber, compNumber)
    return compNumber
}

const cpuNumber = cpuNumberOneToFive()

function sum(num1,num2) {
    let result = num1 + num2

    return result
}

sum(userNumber,cpuNumber)

console.log(userNumber, cpuNumber)

console.log(sum(userNumber,cpuNumber))

const isEven = sum(userNumber,cpuNumber) % 2 === 0

if ((evenOrOdd === 'pari' && isEven) || (evenOrOdd === 'dispari' && !isEven)) {
    console.log('Hai vinto!')
} else {
    console.log('Hai perso!')
}