// const handle = (e) => {
//     e.preventDefault();

//     const name = e.target.emon.value
//     const sumon = e.target.sumon.value
//     if (
//         sumon == ""
//     ) {
//         alert("Please enter your name and email")
//     }
//     else {
//         alert("Thank you for your submission")
//     }
// }


// let person = {

// }

// person.name = 'Sumit';
// person.age = 22;
// person.gender = function () {
//     console.log('Male')
// }
// person.sleep = function () {
//     console.log('Sleeping')
// }


// const personMethods = {
//     gender() {
//         console.log('Male')
//     },
//     sleep() {
//         console.log('Sleeping')
//     }
// }


// function Person(name, age) {

//     // let person = Object.create(Person.prototype);

//     this.name = 'Sumit';
//     this.age = 22;

//     // person.gender = personMethods.gender
//     // person.sleep = personMethods.sleep
//     return person;

// }



// Person.prototype = {
//     gender() {
//         console.log('Male')
//     },
//     sleep() {
//         console.log('Sleeping')
//     }
// }


// const person1 = Person('Sumit', 22);
// person1.gender()
// const person2 = new Person('Sumit', 22);
// person2.gender()


// const captain = {
//     name: "Mashrafi",
//     age: 37,
//     country: "Bangladesh"
// }


// const paylers = Object.create(captain);



// function test() {

// }

// console.dir(test.prototype); // {}




// class PersonC {

//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     gender() {
//         console.log('Male')
//     },
//     sleep() {
//         console.log('Sleeping')
//     }
// }

// const emon = new PersonC('Emon', 26);

// emon.gender()


// let user = new Array()
// user.push('Emon');
// console.log(user);



const myArray = [10, 20, 30, 40, 50];



[myArray[1], myArray[myArray.length - 3]] = [myArray[myArray.length - 3], myArray[1]];


console.log(myArray)

