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


console.log(Object.keys(profile)); // [ 'firstName', 'lastName', 'message', 'address' ]
console.log(Object.values(profile));

let fruit = { name: "mango" }
const oneMoreFruit = { name: "apple" }

console.log(fruit === oneMoreFruit); // false



fruit = oneMoreFruit;
console.log(fruit === oneMoreFruit); // true
console.log(fruit); // { name: 'apple' }


//staick methods

const target = { b: 1, a: 5 };
const source = { a: 3, c: 3 };

const returnedTarget = Object.assign(target, source);

console.log(target); // { a: 1, b: 2, c: 3 }
console.log(returnedTarget); // { a: 1, b: 2, c: 3 }

const oj3 = {
    a: 1,
    b: { c: 2 }
}

const obj4 = Object.assign({}, oj3);

obj4.b.c = 5;

console.log(oj3.b.c); // 5


// const arr = [1, 2, 3];
// const clonedArr = Object.assign({}, arr);
// console.log(clonedArr); 


const obj5 = {
    a: 1,
    b: 2
}
const cloneObj5 = structuredClone(obj5);

const arr = Object.entries(cloneObj5);
; // [ [ 'a', 1 ], [ 'b', 2 ] ]


const enties = new Map([
    ['a', 1],
    ['b', 2]
])
console.log(enties); // Map(2) { 'a' => 1, 'b' => 2 }

const fromEntries = Object.fromEntries(enties);
console.log(fromEntries); // { a: 1, b: 2 }


const obj6 = {
    sal: 1000
}

Object.freeze(obj6);
obj6.sal = 2000; // fails silently in non-strict mode
console.log(obj6.sal); // 1000

console.log(Object.isFrozen(obj6)); // true

const obj7 = {
    val: 42
}
Object.seal(obj7);
obj7.val = 100; // works
console.log(obj7.val); // 100

console.log(Object.isSealed(obj7)); // true

Object.hasOwn(obj7, 'val'); // true

// Object destructuring
const student = {
    id: 1,
    studentName: 'Alice',
    grade: 'A',
    average: 95
    parents: {
        father: 'Bob',
        mother: 'Carol'
    },
    subjects: ['Math', 'Science', 'History']
};

const { studentName, grade, meal = "bread" } = student;
console.log(studentName);

const { subjects, numberOfSubjects = subjects.length } = student;

console.log(numberOfSubjects); // 3


const { grade: studentGrade } = student;


const { parents: { father, mother } } = student;