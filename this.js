// implicit binding
// explicit binding
// new binding
// window binding
// var name = 'sakib'

// var printPlayerName = function (name) {
//     console.log(name)
// }


// var emon = {
//     name: "emon",
//     age: 35,

// }



// var printPlayerNameFun = function (obj) {
//     obj.printPlayerName = function () {
//         console.log(this.name)
//     }
// }

// printPlayerNameFun(emon)

// emon.printPlayerName()




// explict binding


// var sk

// var printName = function (v1) {
//     console.log(`${this.name} very`)
// }

// var emon = {
//     name: "emon",
//     age: 35,


// }

// var v1 = 'Handsome'
// var v2 = 'good'

// var v = [v1, v2]

// printName.call(emon, v1)

// printName.apply(emon, v1)

// var newfunc = printName.bind(sakib, v1)

// newfunc()



//new binding



// var PrintName 

// const obj = {
//     name: "Tom",
//     greet: function () {
//         console.log(`Hello, ${this.name}!`);
//     },
// };
// const greetFn = obj.greet;


// // console.log(greetFn.call(obj))
// greetFn.call(obj)



// function outer(a) {
//     console.log("this inside an outer function", this);

//     return function inner(b) {
//         console.log("this inside an inner function", this);
//     }
// }
// const outerResult = outer(5);
// outerResult(3)



// const obj = {
//     name: "emon ",
//     age: 33,
//     payName: function () {

//         return () => console.log(this.name)
//     }
// }



// const result = obj.payName()

// result()

// // console.log(result.apply(obj))


const user = {
    name: "Alex",
    greet: function () {
        // name = 'emon'
        function inner() {
            console.log(`Hello, ${this.name}!`);
        }
        inner.call(user);
    },
};

const result = user.greet()
