class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;


    }
    eat() { //method
        console.log(`${this.name} is eating`)
    }

    get setName() {
        return this.name

    }
    //seter

    set setName(name) {
        this.name = name
    }


}
let sakib = new Person('skib', 35)

console.log(sakib.setName)
console.log(sakib.get = "tamim")

class Cricketet extends Person {
    constructor(name, age, country) {
        super(name, age)
        this.name = name;
        this.age = age;
        this.country = country;
    }
}


let Sakbib = new Cricketet("Sakib", 22, "bangladesh")
console.log(Sakbib.name)