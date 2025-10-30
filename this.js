// implicit binding
// explicit binding
// new binding
// window binding
// var name = 'sakib'

// var printPlayerName = function (name) {
//     console.log(name)
// }


var emon = {
    name: "emon",
    age: 35,

}



var printPlayerNameFun = function (obj) {
    obj.printPlayerName = function () {
        console.log(this.name)
    }
}

printPlayerNameFun(emon)

emon.printPlayerName()