function secuence(inputArray) {
    for (let i = 1; i < inputArray.length; i++) {

        if (inputArray[i] < inputArray[i - 1]) {
            return false
        }
    }
    return true
}

console.log(secuence([1, 2, 5, 4]))
// console.log(secuence([1, 5, 3, 4]))