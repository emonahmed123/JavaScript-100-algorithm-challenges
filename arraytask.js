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



// const myArray = ["rice", "fish", "meat", "vegetable", "fruits", "cake", "ice-cream", "chocolate", "biscuit", "bread"];

// const [, , , , , fruits] = myArray;
// console.log(fruits) // cake

/*T-009: Take out the last 8 food items from the above array using the Array destructuring. Hint: rest parameter.*/

// const myArray = ["rice", "fish", "meat", "vegetable", "fruits", "cake", "ice-cream", "chocolate", "biscuit", "bread"];
// const [, , ...foods] = myArray;
// console.log(foods) // ["vegetable", "fruits", "cake", "ice-cream", "chocolate", "biscuit", "bread"]

/*T-010: Create an array of 5 elements and swap the first element with the last element of the array.*/

// const myArray = [10, 20, 30, 40, 50];

// [myArray[0], myArray[myArray.length - 1]] = [myArray[myArray.length - 1], myArray[0]];
// console.log(myArray) // [50, 20, 30, 40, 10]


/*T-011:  Empty an array using its length property*/


// const myArray = [10, 20, 30, 40, 50];
// myArray.length = 0;
// console.log(myArray)

/*T-012: Create an array of 10 elements(number 1 to 10). Resize the array to length 6 once you find the number 5 in that array. Hint: Use for-loop*/

// const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// for (let i = 0; i < myArray.length; i++) {
//     if (myArray[i] == myArray[5]) {
//         myArray.length = 6
//         break
//     }
// }

// console.log(myArray) // [1, 2, 3, 4, 5, 6]

/*T-013:Create an Array of 10 elements. You can empty the array in multiple ways: using the length property, using the pop() method, using the shift() method, setting the array with [], or the splice() method. Which among these methods are most efficient and why.*/

// const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// myArray.length = 0;
// console.log(myArray) // []

/*T-014:What happens when you concatenate two empty arrays */
// const arr = [];
// const arr2 = [];
// const arr3 = arr.concat(arr2);
// console.log(arr3) // []


// const arr = []
// const arr2 = []
// const arr3 = arr + arr2
// console.log(arr3)

