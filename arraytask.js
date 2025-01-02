/*
T-001: Create an array of 5 elements using the Array Constructor.
*/
//Ans:001

// const arr = new Array("emon", "sumon", "alif", "ss", "jkk");

/*
Create an array of 3 empty slots.

*/
//Ans:002

// console.log(new Array(3))

/*
T-003: Create an array of 6 elements using the Array literals and access the fourth element in the array using its length property.
*/
// const myArray = [10, 20, 30, 40, 50, 60];

// const fourthElement = myArray[myArray.length - (myArray.length - 3)]

// console.log(fourthElement)



/*
 T-004: Use the for loop on the above array to print elements in the odd index
*/
//ans:004

// const myArray = [10, 1, 30, 40, 50, 60];

// for (let i = 0; i < myArray.length; i++) {
//     if (i % 2 !== 0) {
//         console.log(myArray[i])
//     }
// }


/*T-005: Add one element at the front and the end of an array.*/
//ans:005

// const myArray = [10, 1, 30, 40, 50, 60];

// myArray.unshift(10); myArray.push(60);
// console.log(myArray)

/*T-006: Add an element at the 2nd index and remove the 3rd element from the array.*/
//ans:006

// const myArray = [10, 1, 30, 40, 50, 60];

// myArray.splice(2, 0, 20);
// myArray.splice(3, 1);

// console.log(myArray) // [10, 1, 20, 40, 50, 60]  // 30 removed


/*T-007: Remove an element from the front and the end of an array.*/

//ans:007

// const myArray = [10, 1, 30, 40, 50, 60];
// myArray.shift(); myArray.pop();
// console.log(myArray) // [1, 30, 40, 50]  // 10, 60 removed

/*T-008: Create an array containing the name of your favourite foods(10 foods). Destructure the 6th food element from the array using destructuring.*/



const myArray = ["rice", "fish", "meat", "vegetable", "fruits", "cake", "ice-cream", "chocolate", "biscuit", "bread"];

const [, , , , , fruits] = myArray;
console.log(fruits) // cake