// Remove Falsy Values from Array

// let miscellaneous = [

//     42,
//     "Hello, World!",
//     true,
//     null,
//     undefined,
//     false
// ],

// const removeFalsyValues = (arr) => {


//     return arr.filter(Boolean);


// }

// console.log(removeFalsyValues(miscellaneous)); // [ 42, 'Hello, World!', true ]     


// convert any value to boolean 

//     console.log(!!'Convert to boolean:');

// console.log(!!0)



// Resizing an Array
//     let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// numbers.length = 5



// How to Flatten  a multi-dimensional Array

// const multiDimensionalArray = [1, [2, [3, [4]]]];

// console.log(multiDimensionalArray.flat(3)); // [ 1, 2, 3, 4 ]

// // short conditnal

// const captain = "Mashrafi"

// captain === "Mashrafi" && console.log("Bangladesh Cricket Team Captain");

// // replace all occurrences of a string

// const phrase = "I love JavaScript. JavaScript is awesome!";

// const updatedPhrase = phrase.replaceAll("JavaScript", "JS");

// console.log(updatedPhrase);

// console.log({ libray })



const startTime = performance.now();


for (let i = 0; i < 5000000; i++) {
    console.log(i)
}

const endTime = performance.now();

console.log(`Execution time: ${endTime - startTime} milliseconds`);