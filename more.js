// I try to understand problem and slove it

// Bring me the names!
// Write an arrow function where it will take an array of objects as a function parameter. Each object will have the properties name and age. You will have to only return the name property of each object in an array as shown below:

// const findNames = (arrOfObj) => {
//     const Map = arrOfObj.map(a => a.name)
//     return Map
// }

// findNames([
//     { name: 'John', age: 20 },
//     { name: 'Mary', age: 25 },
//     { name: 'Peter', age: 30 }
// ])

// Write an arrow function where it will take an array of numbers and do the following:

// 1. Square each array element e.g ˣ², ʸ²,...
// 2. Calculate the sum of the squared elements e.g ˣ²⁺ʸ²+...
// 3. Return the average of the sum of the squared elements(ˣ²⁺ʸ²+...) / n where n is the length of the array suing javascript





// const calculate = (arrOfNumbers) => {
//     //write your code here
//     let a = 0

//     for (let i = 0; i < arrOfNumbers.length; i++) {
//         let value = arrOfNumbers[i]

//         let vas = Math.pow(value, 2)
//         a = a + vas

//     }
//     const res = a / arrOfNumbers.length
//     return res
// }

// calculate([4, 6, 10, 12])



// const averageOfSquaredElements = (numbers) => {
//     // Square each element and sum them up
//     const sumOfSquared = numbers.reduce((acc, num) => acc + Math.pow(num, 2), 0);

//     // Calculate the average
//     const average = sumOfSquared / numbers.length;

//     return average;
// };

// Example usage:
// const numbers = [4, 6, 10, 12]
// const result = averageOfSquaredElements(numbers);
// console.log(result);