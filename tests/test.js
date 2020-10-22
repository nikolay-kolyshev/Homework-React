"use strict"

const foo = (a, b, ...args) => console.log(a, b, args)
const power = (x,y,z = 1) => x**y**z
const showStudent = ({
    name: {first: firstname},
    age,
    offers: {1: {1: offersFirstQuarter}}
}) => console.log(firstname, age, offersFirstQuarter)

const array = [2,3,4]

/*
foo('a','b','c','d')
console.log(power(...array))*/


let [one, two, ...numbers] = [1, 2, 3, 4, 5, 6]
console.log(one, two, numbers)

let {name: {first: firstname, last: lastname}, age} = {name: {first: "Nikolay", last: "Kolyshev"}, age: 19}
console.log(firstname, lastname, age)

showStudent({
    name: {
        first: "Nikolay",
        last: "Kolyshev"
    },
    age: 19,
    offers: {
        1: {
            1: [2,5,4],
            2: [5,5,4],
            3: [3,5,4],
            4: [5,5,5]
        },
        2: {

        },
        9:{

        },
        11: {

        }
    }
})

