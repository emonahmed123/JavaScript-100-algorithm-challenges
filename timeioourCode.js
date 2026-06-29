// Big O (n)

// function sumofAll(a) {
//   let total = 0;
//   for (let i = 0; i <= a; i++) {
//     total += i;
//   }
//   return total;
// }

// //Big o (1)
// function sumofAll(a) {
//   return (a * (a + 1)) / 2;
// }

// const result = sumofAll(5);
// console.log(result); // Output: 15

// let time1 = performance.now();

// function minSlog(n) {
//   for (let i = 0; i <= Math.max(5, n); i++) {
//     console.log(i);
//   }
// }

// minSlog(100); // Big O(n)

function MaxSlog(n) {
  for (let i = 0; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}

MaxSlog(2); // Big O(1)
