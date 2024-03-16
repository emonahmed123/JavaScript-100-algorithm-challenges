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

// write a function to find the longest common prefix string amongst an arr  ay of string if there is no common  prefix, return an amty string

// function longestPrefix(arr) {
//     if (arr.length === 0) return "";

//     let prefix = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < prefix.length; j++) {
//             if (prefix[j] !== arr[i][j]) {


//                 prefix = prefix.slice(0, j);
//             }

//         }

//         if (prefix === "") return [];
//     }

//     return prefix;
// }

// // Example usage:
// const arr = ["flsower", "flsow", "flsight"];
// console.log(longestPrefix(arr)); // Output: "fl"



// var filter = function (arr, fn) {
//     let number = []
//     for (let i = 0; i < arr.length; i++) {

//         if (arr[i] > 10) {
//             number.push(fn(arr[i], i))
//         }

//     }
//     return number
// };


// var filter = function (arr, fn) {
//     let number = []
//     for (let i = 0; i < arr.length; i++) {
//         if (fn(arr[i], i)) {
//             console.log(number.push(arr[i]));
//         }

//     }
//     return (number)
// };



// console.log(filter([0, 10, 20, 30], (element, index) => element > 10));



// var customSortString = function (order, s) {
//     const charMap = [];

//     // Create a map to store the positions of characters in the order string
//     for (let i = 0; i < order.length; i++) {
//         charMap[order[i]] = i;

//     }

//     // Sort characters based on their positions in the order string
//     const sortedS = s.split('').sort((a, b) => {
//         return charMap[a] - charMap[b];

//     });

//     // Join the sorted characters to form the permuted string
//     return sortedS.join('');
// };

// // Example usage:
// const order = "cbad";
// const s = "abcd";

// console.log(customSortString(order, s));


// var removeDuplicates = function (nums) {

//     let uniqeId = nums[0]

//     for (let i = 0; i < nums.length; i++) {

//         if (uniqeId !== nums[i]) {
//             uniqeId = (nums[i])
//         }
//     }

//     console.log(uniqeId)
// };


// removeDuplicates([1, 1, 2, 3, 4, 4])


// function removeDuplicates(nums) {
//     if (nums.length === 0) return 0; // Edge case: empty array

//     let uniqueIndex = 0; // Pointer to track the position of the next unique element

//     // Iterate through the array starting from the second element
//     for (let i = 1; i < nums.length; i++) {
//         // If the current element is different from the previous unique element
//         if (nums[i] !== nums[uniqueIndex]) {
//             uniqueIndex++; // Move the unique pointer forward
//             nums[uniqueIndex] = nums[i]; // Update the array with the unique element
//         }
//     }

//     // Return the length of the unique elements (uniqueIndex + 1)
//     return uniqueIndex + 1;
// }

// Example usage:


// remove duplicate arry

// var removeDuplicates = function (nums) {
//     let i = 0;
//     let bal = []
//     for (let j = 1; j < nums.length; j++) {
//         if (nums[i] !== nums[j]) {
//             i++;
//             nums[i] = nums[j];

//             bal.push(nums[i])
//         }
//     }

//     return bal;



// };


// const nums = ['apple', 'apple', 'sumon'];
// console.log(removeDuplicates(nums))


// cheak the dupllicate string in array

// function hello(arr) {

//     let newarr = [];
//     for (let i = 0; i < arr.length; i++) {


//         if (newarr.includes(arr[i]) !== true) {



//             newarr.push(arr[i])
//         }


//     }
//     return newarr

// }

// console.log(hello(['apple', 'apple', 'sumon', 'emon', 'emon']))


// Given a positive integer n, find the pivot integer x such that:

// The sum of all elements between 1 and x inclusively equals the sum of all elements between x and n inclusively.
// Return the pivot integer x. If no such integer exists, return -1. It is guaranteed that there will be at most one pivot index for the given input


// function findPivotInteger(n) {


//     let x = Math.sqrt(n * (n + 1) / 2);
//     console.log(x)

//     if (x % 1 !== 0) {
//         return -1;
//     } else {
//         return Math.floor(x);
//     }
// }

// // Example usage:
// let n = 11;
// console.log(findPivotInteger(n));  // Output: 5


// var removeElement = function (nums, val) {


//     let left = [0]


//     for (let i = 0; i < nums.length; i++) {

//         if (nums[i] !== val) {

//             nums[left] = nums[i]
//             left++
//         }
//     }

//     return left

// };


// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2))



// var twoSum = function (nums, target) {

//     let main = []


//     for (let i = 1; i < nums.length; i++) {
//         console.log(nums[i])
//         if (nums[i]) {

//             return [main[i], i]
//         }


//     }

// };

// console.log(twoSum([2, 7, 11, 15], 9))





var searchInsert = function (nums, target) {


    let vAlu = 0;

    // const findIndex = nums.findIndex((number) => number == target);
    // console.log(findIndex)
    for (let i = 0; i < nums.length; i++) {


        if (nums[i] === target) {
            vAlu = MainValue
        }


    }


    if (vAlu > 0) {

        return nums.indexOf(vAlu)
    }
    else {
        let sla = 1
        return sla
    }
};

console.log(searchInsert([1, 3, 5, 6], 2))