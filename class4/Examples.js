const printLetters = (input) => {
    for (let index = 0; index < input.length; index++) {
        setTimeout(printAletter, index * 1000, input[index])
    }
    setTimeout(endMessage, 1000)
}
const printAletter = (letter) => {
    console.log(letter)
}
const endMessage = () => {
    console.log('hey the end')
}

printLetters("testing")

//same as 
const showLetter = (message) => {
    let i = 0
    const interval = setInterval(() => {
        console.log(message.charAt(i++))
        if (i === message.length) {
            clearInterval(interval)
            console.log('end')

        }
    }, 1000)

}

showLetter('hello')

setTimeout(showLetter, 250, "hey")

setTimeout(showLetter, 500, "daniel")

setTimeout(showLetter, 750, "what")