// const removeDuplicate = (arg) => {
//   let newArr = [];

//   for (let i = 0; i < arg.length; i++) {



//     if (!newArr.includes(arg[i])) {
//       newArr.push(arg[i])
//     }
//   }
//   console.log(newArr)
// };

// removeDuplicate([1, 3, 2, 2, 4, 5, 6]);



let arr = 'this is a test string';



function capliTalize(arr) {
  let modified = []

  let isArry = arr.split(' ')
  console.log(isArry)
  for (let i = 0; i < isArry.length; i++) {
    modified.push(isArry[i].charAt(0).toUpperCase() + isArry[i].slice(1))
  }
  console.log(modified)
  let result = modified.join(' ')
  console.log(result)
}
capliTalize(arr)
// function capitalize(str) {

//   console.log(str)

//   let words = str.split(' ');


//   let capitalizedWords = words.map(word => {
//     return word.charAt(0).toUpperCase() + word.slice(1);
//   });

//   let result = capitalizedWords.join(' ');
//   return capitalizedWords.join(' ');
// }


// capitalize(arr)

// class StringManipulator {
//   constructor(str) {
//     this.str = str;
//   }

//   capitalize() {
//     let words = this.str.split(' ');

//     let capitalizedWords = words.map(word => {
//       console.log(word)
//       return word.charAt(0).)toUpperCase() + word.slice(1).toLowerCase();
//   });

//     return capitalizedWords.join(' ');
// }
// }



// const emonString = new StringManipulator(arr)

// console.log(emonString.capitalize()); // Output: "This Is A Test String"