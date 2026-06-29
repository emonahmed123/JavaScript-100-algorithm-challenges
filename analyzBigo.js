function uniqeName(arr) {
  let uniqueNames = [];

  for (let i = 0; i < arr.length; i++) {
    //n2
    let name = arr[i];
    if (!uniqueNames.includes(name)) {
      uniqueNames.push(name);
    }
  }
  return uniqueNames;
}

// time complexity of the above function is O(n^2) because for each element in the input array, we are checking if it exists in the uniqueNames array using the includes method, which has a time complexity of O(n). Therefore, the overall time complexity is O(n^2).

let names = ["Alice", "Bob", "Alice", "Charlie", "Bob"];
console.log(uniqeName(names));
