const fs = require('fs')

class Container {
    constructor(file) {
        this.filePath = file
        this.total = 0;
    }

    save(object) {
        const newObject = {
            id: this.total++,
            ...object
        }
        try {
            fs.promises.appendFile(this.filePath, JSON.stringify(newObject, null, 2))
        } catch (error) {
            console.log('could not save the object:')
            console.log(error)
        }
        return newObject.id
    }


}

const test = new Container('./containerTest.txt')

testObject = {
    name: 'test1',
    property: 'prop1'
}
test.save(testObject)
test.save(testObject)

console.log(test.save(testObject))
