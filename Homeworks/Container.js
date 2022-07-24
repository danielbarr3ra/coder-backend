const fs = require('fs')

class Container {
    constructor(file) {
        this.filePath = file
        this.total = 0
    }

    async save(object) {
        const newObject = {
            id: this.total++,
            ...object
        }
        try {
            const writting = fs.promises.appendFile(this.filePath, JSON.stringify(newObject, null, 2) + ',\n')
            await writting
        } catch (error) {
            console.log('could not save the object:')
            console.log(error)
        }
        return newObject.id
    }
    async getAll() {
        const content = fs.promises.readFile(this.filePath, 'utf-8').then((result) => {
            console.log('here are the objects')
            return result
        }).catch((error) => {
            console.log('could not get the objects')
            console.log(error)
        })
        return content
    }
}

const test = new Container('./containerTest.txt')

testObject = {
    title: 'namae',
    price: 1234,
    thumbnail: 'www.something.com'
}
test.save(testObject)
test.save(testObject)
test.save(testObject)

test.save(testObject).then((result) => { console.log(result) })
test.getAll().then((result) => { console.log(result) })