



// const getData = new Promise((resolve, reject) => {
//     const num = Math.random() * 10;
//     console.log(num)
//     if (num < 5) {



//         resolve('33')

//     }
//     else (
//         reject('no data')
//     )


// })
// console.log(getData)

// getData
//     .then(data => console.log('loade', data))
//     .catch(err => console.log('Err', err))


async function myfnc() {
    throw new Error(['tt'])
}

const res = myfnc()

console.log(res)