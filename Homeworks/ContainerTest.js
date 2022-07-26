const Container = require('./Container')

async function main() {
    // SEE AN EXISITING FILE
    const existingCointainer = new Container('./existingContainer.txt')
    console.log(await existingCointainer.getAll())
    // ADDING AN ELEMENT SHOULD HAVE AN ID GREATER TAHN THE PREVIOUS ONE
    let newElement = {
        title: "sampel2",
        price: 100,
        thumbnail: "www.sample2"
    }
    await existingCointainer.save(newElement)
    console.log(await existingCointainer.getAll())

    //TEST IF FILE DOES NOT EXISTS IT WILL MAKE A NEW ONE WITH EMPTY VALUE
    const testContainer = new Container('./newFile.txt')
    // RETURNS EMPTY ARRAY IF THERE ARE NO ELEMENTS
    console.log(await testContainer.getAll())
    //GET ADD 3 ELEMENTS
    await testContainer.save(newElement)
    await testContainer.save(newElement)
    await testContainer.save(newElement)

    //GET ALL ELEMENT
    console.log(await testContainer.getAll())
    // REMOVE THE SECONDE ELEMENT

    await testContainer.deleteById(2)
    console.log(await testContainer.getAll())


    //REMOVE ALL THE ELEMENETS
    await testContainer.deleteAll()
    console.log(await testContainer.getAll())

}

main()