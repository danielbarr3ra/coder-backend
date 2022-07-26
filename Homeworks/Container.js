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
        try {
            const content = await fs.promises.readFile(this.filePath, 'utf-8')
            return JSON.parse(content)
        } catch (error) {
            console.log(error)
            return []
        }
    }

    async getById(id) {
        const content = await this.getAll()
        const target = content.find((element) => {
            return element.id == id
        })
        return target
    }
}

module.exports = Container
