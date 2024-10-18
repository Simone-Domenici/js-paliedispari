const word = prompt('Inserisci Parola')

function isPalindrome(text) {

    let reversedWord = ''

    for (let i = 0; i < text.length ; i++) {
        const char = text.at(-1 -i)  
        reversedWord += char.toLowerCase()
    }
    // console.log(reversedWord)

    return reversedWord
    
}

isPalindrome(word)

// console.log(isPalindrome(word))
// console.log(word.toLowerCase())

if (isPalindrome(word) === word.toLowerCase()) {
    console.log('Sono palindrome')
} else {
    console.log('Non sono palindrome')
}