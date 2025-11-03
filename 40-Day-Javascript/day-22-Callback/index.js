// console.log("Day 22: Callback Functions");

// // for (let i = 1; i <= 5; i++) {
// //     console.log('count')

// // }
// // callback function
// function fetchData(callback) {
//     console.log("Fetching data...");
//     setTimeout(() => {
//         const data = { id: 1, name: "Sample Data" };
//         callback(data);
//     }, 2000);
// }


// fetchData(function (data) {
//     console.log("Data received:", data);
// });


// console.log("End of Day 22");




// function greet(name, callback) {

//     console.log("hello")


//     setTimeout(() => { callback(); }, 2000)
//     console.log("greeted")
// }

// function sayGoodbye() {
//     console.log("Goodbye!");
// }

// greet("Alice", sayGoodbye);




function Order(name, id) {


    query(`/${name}/${id}`, function (product, error) {




        console.log("Error:", error);

        if (!error) {
            let pdroduct = product;
            console.log("Product Title:", pdroduct);
        }
    });

}


function query(endpoint, callback, options) {
    console.log(endpoint)
    fetch(`https://dummyjson.com${endpoint}`, options)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            setTimeout(() => {
                callback(json)
            }, 2000);
        });
}



Order("products", 1);