const removeDuplicate = (arg) => {
  let newArr = [];

  for (let i = 0; i < arg.length; i++) {



    if (!newArr.includes(arg[i])) {
      newArr.push(arg[i])
    }
  }
  console.log(newArr)
};

removeDuplicate([1, 3, 2, 2, 4, 5, 6]);

