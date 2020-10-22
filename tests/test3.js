const [firstname, lastname] = ['James', 'Bond']
const nameProps = `age`
const obj = {
    firstname,
    lastname,
    [nameProps]: 20,
    sayWord(word) {
        console.log(`${this.firstname} say ${word}`)
    }
}

console.log(obj)
obj.sayWord("salam")