const Container = require('./Container')

async function main() {
    const test = new Container('./containerTest.txt')
    console.log("get All content tets")
    let content = await test.getAll()
    console.log(content)
    console.log('removing item 1')
    await test.deleteById(1)
}

main()