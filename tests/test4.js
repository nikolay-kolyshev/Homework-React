class Plane {
    constructor(model,year) {
        this.model = model,
        this.year = year
    }
    fly() {
        console.log(`Plane ${this.model} fly`)
    }

}

class CargoPlane extends Plane {
    constructor(model,year,wight) {
        super(model,year)
        this.weight = wight
    }

}

const sy31 = new Plane("sy31", 1988)
sy31.fly()
const gg20 = new CargoPlane("gg20", 2002, 15000)
console.log(gg20.weight)
