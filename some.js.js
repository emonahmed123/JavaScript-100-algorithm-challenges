// inch to foot

// const inch = 24;

// function Tooo(inchTofoot) {

//     const foot = parseInt(inchTofoot / 12)
//     return foot

// }
// console.log(Tooo(inch))

//if odd numer retrun flase if even number retrun true



// function cheakEvenOdd(numer) {

//     const remainder = numer % 2
//     console.log(remainder)
//     if (remainder == 0) {
//         return true
//     }
//     else {
//         return false
//     }
// }

// console.log(cheakEvenOdd(5))


//leap when year is leapyear


// function Leapyear(year) {

//     const Leap = year % 4

//     if (Leap === 0) {
//         return console.log("this is  leap year")
//     }

//     else {
//         return console.log("this is not  leap year")
//     }

// }
// Leapyear(2024)

// find odd number





// function findOddSum(paras) {
//     let sum = 0
//     paras.forEach((para, index) => {
//         const element = para
//         sum += element


//     });

//     return sum

// }
// function getOddnuminArray(numbers) {
//     const oddNumbara = []
//     for (let i = 0; i < numbers.length; i++) {
//         const index = i;

//         const element = numbers[index];
//         if (element % 2 !== 0) {


//             oddNumbara.push(element)
//         }


//     }

//     return oddNumbara

// }


// const oddNumbaras = (getOddnuminArray([5, 7, 8, 45, 30]))

// console.log(findOddSum(oddNumbaras))




// const lastvalue = [1, 2, 3, 4, 5];

// console.log(lastvalue[1])


// if (5 == '5') {
//     console.log('hello')
// } else (
//     console.log('fuck you')
// )




// let areaOfShapes = 'square'
// let a = 5;
// let b = 10;
// let result
// switch (areaOfShapes) {
//     case "square":
//         result = a * a
//         console.log(result)
//         break
//     case "rectangle":
//         result = a * b
//         console.log(result)
//         break


//     default:
// }
let two = 5

for (let i = 1; i <= 10; i++) {
    let index = i

    let numata = two * index

    let num = two + 'x' + index + '=' + numata

    console.log(num)
}