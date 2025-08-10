

const row = 5;
const col = 5;
let start = ""
for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= col; j++) {
        start += "*"
    }
    start += "\n"

}

console.log(start);


// Hollow Rectangle Pattern

const row = 5;
const col = 5;
let start = ""
for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= col; j++) {


        if (j == 1 || j == col) {
            start += " * "
        }
        else if (i == 1 || i == row) {
            start += " * "
        }
        else {
            start += "   "
        }

    }
    start += "\n"

}

console.log(start);



// inverted Half Pyramid
const row = 5;
// const col = 5;

let start = ""

for (let i = row; i >= 1; i--) {
    console.log(i)
    for (let j = 1; j <= i; j++) {
        console.log(j)
        start += "*";



    }
    start += "\n"

}


console.log(start)

