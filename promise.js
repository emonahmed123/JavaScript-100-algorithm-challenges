const getData = new Promise((resolve, reject) => {
    reject('no data')
})
console.log(getData)

getData
    .then(data => console.log(data + 2))
    .catch(err => console.log('Err', err))