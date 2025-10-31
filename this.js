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

var printName = function (v1) {
    console.log(`${this.name} very`)
}

var emon = {
    name: "emon",
    age: 35,


}

var v1 = 'Handsome'
var v2 = 'good'

var v = [v1, v2]

// printName.call(emon, v1)

// printName.apply(emon, v1)

// var newfunc = printName.bind(sakib, v1)

// newfunc()
