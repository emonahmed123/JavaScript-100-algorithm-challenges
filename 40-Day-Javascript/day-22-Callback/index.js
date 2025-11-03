console.log("Day 22: Callback Functions");


function fetchData(callback) {
    console.log("Fetching data...");
    setTimeout(() => {
        const data = { id: 1, name: "Sample Data" };
        callback(data);
    }, 2000);
}


fetchData(function (data) {
    console.log("Data received:", data);
});


console.log("End of Day 22");