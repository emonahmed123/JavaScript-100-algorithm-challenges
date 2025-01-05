
function higherOrderFunction(callback) {
    console.log('I am higher order function');
    callback();
}

function callbackFunction() {
    console.log('I am a callback function');
}


const bal = higherOrderFunction(callbackFunction); // I am higher order function

// today i am busy for job task