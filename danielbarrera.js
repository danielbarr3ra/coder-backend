class User {
    constructor(fname, lname, books, pets) {
        this.fname = fname;
        this.lname = lname;
        this.books = books;
        this.pets = pets;
    }
    getFullName() {
        return (`${this.fname} ${this.lname}`)
    }
    addPet(newPet) {
        this.pets.push(newPet)
    }
    countPets() {
        return this.pets.length
    }
    addBook(title, author) {
        let newBook = {
            name: title,
            author: author
        }
        this.books.push(newBook)
    }
    getBookName(name) {
        let answer = []
        this.books.filter(book => book.author == name).map(book => answer.push(book.name))
        return answer
    }
}

// testing
let anUser = new User('daniel', 'barrera', [{ name: 'pride and prejudice', author: 'Jane Austin' }], ['dante'])

console.log(anUser.getFullName())
anUser.addPet('Dante2')
console.log(anUser.pets)
console.log(anUser.countPets())
anUser.addBook('Mansfield Park', 'Jane Austin')
console.log(anUser.getBookName('Jane Austin'))