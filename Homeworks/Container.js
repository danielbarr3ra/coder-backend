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

    async deleteById(id) {
        const content = await this.getAll();
        const index = content.findIndex((element) => {
            return element.id === id
        })
        const filtered = [
            ...content.slice(0, index),
            ...content.slice(index + 1)
        ]
        console.log(filtered)
        try {
            await this.deleteAll()
            await fs.promises.writeFile(this.filePath, JSON.stringify(filtered, null, 2))

        } catch (error) {
            console.log('could not delete id')
            console.log(error)
        }

    }

    async deleteAll() {
        try {
            await fs.promises.writeFile(this.filePath, '')
        } catch (error) {
            console.log('could not delete file')
        }
    }
}

module.exports = Container
