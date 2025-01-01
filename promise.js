
// const getData = new Promise((resolve, reject) => {

//     const reS = document.getElementById("Res");
//     const reJ = document.getElementById("Rej");

//     reS.addEventListener('click', () => {

//         resolve('hello')
//     })
//     reJ.addEventListener('click', () => {

//         reject('jee')
//     })


//     // const num = Math.random() * 10;

//     // console.log(num)
//     // if (num < 5) {



//     //     resolve('33')

//     // }
//     // else (
//     //     reject('no data')
//     // )





// })
// console.log(getData)

// getData
//     .then(data => console.log('loade', data))
//     .catch(err => console.log('Err', err))

// console.log(getData)
// async function myfnc() {
//     setTimeout(() => {

//     }, 2000)

//     return 'hello'
// }

// const res = myfnc().then()

// console.log(res)
// console.log(myfnc())


// const myPromise = new Promise((resolve, reject) => {
//     // Simulate an asynchronous operation
//     setTimeout(() => {
//         const success = false;
//         if (success) {
//             resolve("Operation completed successfully!");
//         } else {
//             reject("Operation failed!");
//         }
//     }, 2000);
// });

// myPromise.then(
//     result => {
//         console.log("Success:", result);
//     },
//     error => {
//         console.error("Error:", error);
//     }
// );



const myPromise = new Promise((res, rej) => {

    res('dode', my())


})

function my() {
    console.log('me done')
}



console.log(myPromise)