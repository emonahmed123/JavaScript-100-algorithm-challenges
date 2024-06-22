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


const CheakArry = (params) => {

    if (Array.isArray(params) === true) {
        console.log('this is array')
    }

    else {
        console.log('no')
    }
}

CheakArry([])