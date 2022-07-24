const fs = require('fs');

async function readFile() {
    try {
        const content = await fs.promises.readFile('./test.txt', 'utf-8')
        console.log(content)
    } catch (error) {
        console.log(error)
    }
}

readFile()