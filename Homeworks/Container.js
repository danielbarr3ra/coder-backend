const fs = require('fs')

class Container {
    constructor(file) {
        this.filePath = file
    }

    async fileExist(path) {
        if (!fs.existsSync(path)) {
            await fs.promises.writeFile(path, '[]')
        }
    }

    async save(object) {
        await this.fileExist(this.filePath)
        const content = await this.getAll()
        const newObject = {
            id: content.length + 1,
            ...object
        }
        const updated = [
            ...content,
            newObject
        ]
        try {
            await fs.promises.writeFile(this.filePath, JSON.stringify(updated, null, 2))
        } catch (error) {
            console.log('could not save the new object:')
            console.log(error)
        }
        return newObject.id
    }
    async getAll() {
        try {
            const content = await fs.promises.readFile(this.filePath, 'utf-8')
            return JSON.parse(content)
        } catch (error) {
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
        try {
            await fs.promises.writeFile(this.filePath, JSON.stringify(filtered, null, 2))

        } catch (error) {
            console.log('could not delete id')
            console.log(error)
        }

    }

    async deleteAll() {
        try {
            await fs.promises.writeFile(this.filePath, '[]')
        } catch (error) {
            console.log('could not delete file')
        }
    }
}

module.exports = Container
