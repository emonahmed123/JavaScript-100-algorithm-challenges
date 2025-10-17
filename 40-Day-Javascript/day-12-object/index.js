// Learn about objects in JavaScript

console.log('data ');


let user = {
    name: 'emon',
    age: 20,
    "is Admin": true
};
user["Movie Lover"] = true;

user.isSeniorCitizen = false;
console.log(user.name); // emon
console.log(user.age);  // 20
console.log(user); // false
console.log(user["is Admin"]); // true

// Deleting a property
// delete user["Movie Lover"];//



// dynamic property access

const somekey = "age";
console.log(user[somekey]); // 20