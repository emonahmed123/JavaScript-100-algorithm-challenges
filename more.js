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




// const findBooks = (arrOfBooks) => {
//     //write your code here
//     //don't forget to return

//     let Book = arrOfBooks.filter(a => a.year > 2000)
//     return Book

// }
// findBooks([
//     {
//         title: 'To Kill a Mockingbird',
//         author: 'Harper Lee',
//         year: 1960
//     },

//     {
//         title: 'Harry Potter and the Philosopher Stone',
//         author: 'J.K. Rowling',
//         year: 1997
//     },

//     {
//         title: 'The Hunger Games',
//         author: 'Suzanne Collins',
//         year: 2008
//     }
// ]
// )


// Number of Digits in Number
// In this JavaScript task, you are required to create a function named num_of_digits that determines the number of digits in a given integer.The function should accept a single integer num as input, where num is a non - negative integer within the range of 0 to 2 ^ 31 - 1.

// Your objective is to implement a solution without using string manipulation methods such as toString().Instead, you should devise an algorithm that directly operates on the numerical value of the input integer to count its digits.

// To accomplish this, you may utilize mathematical operations, such as division and modulo, to extract individual digits from the integer and increment a count variable accordingly.By iteratively dividing the input integer by 10 and counting the number of iterations required until the integer becomes zero, you can accurately determine the number of digits present.

// Your function should return an integer representing the count of digits in the given input integer.Ensure your solution handles edge cases appropriately, such as when the input integer is zero or when it contains only a single digit.

// As you develop your solution, focus on efficiency, readability, and adherence to best practices in JavaScript programming.Test your function with various input values to validate its correctness and robustness.



// function num_of_digits(num) {
//     // Edge case: when num is zero, it contains only one digit
//     if (num === 0) {
//         return 1;
//     }

//     let count = 0;
//     // Loop until num becomes zero
//     // while (num !== 0) {
//     //     // Increment count for each digit
//     //     count++;
//     //     // Divide num by 10 to remove the last digit
//     //     num = Math.floor(num / 10);
//     // }

//     for (num; num !== 0; num) {
//         count++
//         num = Math.floor(num / 10)
//     }

//     return count;
// }

// console.log(num_of_digits(987654321))



// function isJanuary1stSunday(year) {
//     // Create a new Date object for January 1st of the given year
//     const january1st = new Date(year, 0, 1);
//     console.log(january1st)

//     // Get the day of the week for January 1st (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
//     const dayOfWeek = january1st.getDay();
//     console.log(dayOfWeek)
//     // Check if January 1st falls on a Sunday (dayOfWeek === 0)
//     if (dayOfWeek === 0) {
//         return "YES";
//     } else {
//         return "NO";
//     }
// }

// isJanuary1stSunday(2020)







// function longGestPrifex(arr) {

//     let more = ""
//     for (let i = 0; i < arr.length; i++) {
//         if ((arr[0].charAt(0) === arr[i].charAt(0)) && (arr[0].charAt(1) === arr[i].charAt(1))) {
//             more = arr[i].slice(0, 2)

//         }
//         else {
//             return more = []
//         }


//     }
//     return more
// }


// console.log(longGestPrifex([
//     "fleower", "flesow", "fleight", "flseight", "flseight"
// ]))



function longestPrefix(arr) {
    if (arr.length === 0) return ""; // Return empty string for empty array

    let prefix = arr[0]; // Initialize prefix with the first string

    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < prefix.length && j < arr[i].length; j++) {
            if (prefix[j] !== arr[i][j]) {
                prefix = prefix.slice(0, j); // Update prefix up to the mismatch
                break;
            }
        }
        // If prefix becomes empty, there's no common prefix, return immediately
        if (prefix === "") return [];
    }

    return prefix;
}

// Example usage:
const arr = ["flsower", "flsow", "flsight"];
console.log(longestPrefix(arr)); // Output: "fl"