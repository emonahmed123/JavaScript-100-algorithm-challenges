// Learn about objects in JavaScript

console.log('data ');

// object literal syntax
let user = {
    name: 'emon',
    age: 20,
    "is Admin": true
};
user["Movie Lover"] = true;

user.isSeniorCitizen = false;
console.log(user.name); // emon
console.log(user.age);  // 20
console.log(user); // false
console.log(user["is Admin"]); // true

// Deleting a property
// delete user["Movie Lover"];//



// dynamic property access

const somekey = "age";
console.log(user[somekey]); // 20

let car = "BMW";
let number = 5;

let favCars = {
    [car]: 5
}
console.log(favCars);


// Constructor function

function Car(name, model) {
    this.name = name;
    this.model = model;
}

let car1 = new Car("Toyota", 2020);
console.log(car1);
const audiCar = new Car("Audi", 2021)

console.log(audiCar);

console.log(car1 instanceof Car); // true



const person = new Object();
person.firstName = "John";
console.log(person);


// factory function

function createUser(name, age) {

    return {
        name,
        age,
        greet() {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
    };
}

const user1 = createUser("Alice", 25);
console.log(user1);
user1.greet(); // Hello, my name is Alice and I am 25 years old.


let profile = {
    firstName: "Jane",
    lastName: "Doe",
    message: function () {
        console.log(`${this.firstName} ${this.lastName}`);
    },
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    }
}

// console.log(profile.address.city); // Anytown


// console.log("salary" in user); // false



// for in  loop
for (let key in profile) {
    console.log(key + ":" + profile[key]);

}