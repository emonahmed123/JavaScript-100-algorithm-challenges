// 1- Given a string ,reverse each word in the sentence


// const str = "hello world"

// const Last = str.split(' ');
// let resss = []
// for (let i = 0; i < Last.length; i++) {
//     const reverseW = Last[i]
//     const bal = reverseW.split('').reverse().join('')
//     resss.push(bal)
// }
// console.log(resss.join(' '))

// const ReversWord = (sentence) => {
//     let worlds = sentence.split(' ')

//     let result = [];

//     for (let i = 0; i < worlds.length; i++) {
//         let resultWorld = ''
//         let world = worlds[i]

//         for (let j = world.length - 1; j >= 0; j--) {

//             resultWorld += world[j]
//         }
//         result.push(resultWorld)
//     }

//     console.log(result.join(' '))


// }

// const resultWorld = ReversWord(str)

// 2- How to check if an object is an array or not Provide some code.


// const CheakArry = (params) => {

//     if (Array.isArray(params) === true) {
//         console.log('this is array')
//     }

//     else {
//         console.log('no')
//     }
// }

// CheakArry([])


// 3-  How to empty an array in Javascript ? do not reset it to new array, and do loop through to pop each value


// const arr = [1, 2, 3, 4, 5];


// for (let i = arr.length - 1; i >= 0; i--) {
//     arr.pop(arr[i])

// }

// arr.length = 0

// console.log(arr)


//  how  would you check if a number is an integer?

// function cheakInterger(num) {

//     if (num % 1 === 0) {
//         console.log('is interger')
//     }
//     else {
//         console.log('not')
//     }

// }

// cheakInterger(3.0)


// duplicate this[1,2,3,4]//[1,2,3,1,2,3]


let arr = [1, 2, 3, 4, 4]

// let newArr = [...arr]

// for (let i = 0; i < arr.length; i++) {


//     const element = arr[i];

//     newArr.push(element)
// }


// console.log(arr.concat(arr))