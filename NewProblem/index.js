// 1- Given a string ,reverse each word in the sentence


// const str = "hello world"

// const Last = str.split(' ');
// console.log(Last);

// let resss = []
// for (let i = 0; i < Last.length; i++) {
//     const reverseW = Last[i]
//     console.log(reverseW);
//     const bal = reverseW.split('').reverse().join('')
//     // console.log(bal)
//     resss.push(bal)
// }
// console.log(resss.join(' '));

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


// let arr = [1, 2, 3, 4, 4]

// let newArr = [...arr]

// for (let i = 0; i < arr.length; i++) {


//     const element = arr[i];

//     newArr.push(element)
// }


// console.log(arr.concat(arr))


const e = 'e'






// const arr = [1, 2, 3, 4, 5, 6, 7]


// console.log(arr)

// const newArr = [...arr, 9]
// console.log(newArr)


// const [1, 2,...arr]= arr




// function sum(a) {

//     console.log(a)
//     return function od(b = 1) {

//         console.log(a + b)

//     }
// }


// console.log(sum(1))


// const result = sum(1)

// console.log(result(2))





// const abc = {
//     name: "emon",
//     age: 3,
//     address: "Bangladesh"
// }

// let xyz = {
//     ...abc,
//     name: "Anikt"

// }

// const { name, ...pqr } = abc

// console.log(pqr, xyz)
