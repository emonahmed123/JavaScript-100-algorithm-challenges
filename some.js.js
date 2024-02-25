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
// let two = 5

// for (let i = 1; i <= 10; i++) {
//     let index = i

//     let numata = two * index

//     let num = two + 'x' + index + '=' + numata

//     console.log(num)
// }


// revers a sting whitout revers method


// let sumon = 'emon'




// function enaya(sum) {
//     let values = ''
//     console.log(typeof (values))
//     for (let i = sum.length - 1; i >= 0; i--) {


//         values = values + sum[i]
//     }
//     return values
// }
// console.log(enaya(sumon))


// function faCtorial(num) {
//     let sum = 1
//     for (let i = 1; i <= num; i++) {
//         let index = i;

//         sum = sum * index
//         console.log(i, sum)
//     }


// }
// faCtorial(7)

//   get  all odd number in array and get odd sum in arrry
// let oddArry = [1, 2, 3, 4, 5, 9, 6]

// function getOddnumber(arr) {
//     let Odd = []
//     for (let i = 0; i < arr.length; i++) {
//         let one = arr[i]
//         if (one % 2 !== 0) {
//             Odd.push(one)
//         }
//     }
//     return Odd
// }

// const plus = (getOddnumber(oddArry))


// function Oddsum(sum) {
//     let allSum = 0
//     for (let i = 0; i < sum.length; i++) {
//         let allvalue = sum[i];

//         if (allvalue % 2 !== 0) {
//             allSum = allSum + allvalue
//         }

//     }
//     console.log(allSum)
//     return allSum

// }
// Oddsum(plus);

const sonay = 'i love.you and fuck you'

const emon = sonay.split('')
console.log(emon);

const doesExist = sonay.includes('and')


if (doesExist === true) {

}

console.log(doesExist)