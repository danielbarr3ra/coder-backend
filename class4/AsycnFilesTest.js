const fs = require('fs')



fs.readdir('./', (error, names) => {
    if (error) {
        throw new Error('could not read dir')
    }
    console.log(names)
})