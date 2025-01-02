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

const myArray = [10, 1, 30, 40, 50, 60];

for (let i = 0; i < myArray.length; i++) {
    if (i % 2 !== 0) {
        console.log(myArray[i])
    }
}
