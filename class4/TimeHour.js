const fs = require('fs')


try {
    const currentDate = new Date().toLocaleDateString()
    fs.writeFileSync('./fyh.txt', currentDate)

} catch (error) {
    console.log('could not write writel')
    console.log(error)
}

try {
    const data = fs.readFileSync('./fyh.txt', 'utf-8')
    console.log(data)
} catch (error) {
    console.log('could not read writel')
    console.log(error)
}