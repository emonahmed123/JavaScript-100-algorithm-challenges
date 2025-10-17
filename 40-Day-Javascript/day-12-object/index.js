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