// Remove Falsy Values from Array

let miscellaneous = [

    42,
    "Hello, World!",
    true,
    null,
    undefined,
    false
],

const removeFalsyValues = (arr) => {


    return arr.filter(Boolean);


}

console.log(removeFalsyValues(miscellaneous)); // [ 42, 'Hello, World!', true ]     