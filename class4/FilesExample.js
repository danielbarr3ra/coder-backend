const fs = require('fs')

const data = fs.readFileSync("./test.txt", 'utf-8')
console.log(data)

fs.writeFileSync('./newFile2.txt', 'content of new file')

const newData = fs.readFileSync('./newFile2.txt', 'utf-8')
console.log(newData)

fs.appendFileSync('newFile.txt', '\n appendingn new file')
const appended = fs.readFileSync('./newFile.txt', 'utf-8')
console.log(appended)

fs.unlinkSync('newFile2.txt') //deletest the file

try {
    const dagta = fs.readFileSync('./unaddedFiel.txt')
} catch (error) {
    console.log('something ahppende here')
    console.log(error)
}