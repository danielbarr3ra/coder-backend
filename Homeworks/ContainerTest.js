const Container = require('./Container')

async function main() {
    const test = new Container('./containerTest.txt')
    console.log("get All content tets")
    let content = await test.getAll()
    console.log(content)
    const test2 = new Container('./containerTest.txt')
    console.log("get id 2 content ")
    let content2 = await test.getById(2)
    console.log(content2)
}

main()