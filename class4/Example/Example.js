const fs = require('fs')

fs.readFile('./package.json', 'utf-8', (error, content) => {
    if (error) {
        throw new Error('some error in reading')
    }
    console.log('read file correctly')
    const info = {
        contentStr: content,
        contentObj: JSON.parse(content),
        size: content.length
    }
    console.log(info)

    fs.writeFile('./info.txt', JSON.stringify(info, null, 2), error => {
        if (error) {
            throw new Error('coudl not write the file')
        }
    })
})