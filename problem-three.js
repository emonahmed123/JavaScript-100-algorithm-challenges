// Give a rectangular matrix of characters, add a border of asterisks(*) to it. 

// Example

// For 

// The output should be

// addBorder(picture) = [“*****”, “*abc*”, “*ded*”, “*****”]

// Hints

// concat()
// unshift()
// push()

// A non-empty array of non-empty equal-length strings.



function addBorder(pictures) {

    const wall = '*'.repeat(pictures[0].length + 2)
    console.log(wall)
    pictures.unshift(wall)
    pictures.push(wall);

    for (let i = 1; i < pictures.length - 1; i++) {

        pictures[i] = "*".concat(pictures[i], "*")

    }

    return pictures


}



console.log(addBorder(["abc", 'ghfgh', "ujkhkjh"]))
