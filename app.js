// // function sumNumbers(numbers) {
// //   return numbers[0] + numbers[1] + numbers[2];
// // }

// // console.log(sumNumbers([1, 3, 10]));

// function sumNumbers(numbers) {
//   let result = 0;
//   for (const number of numbers) {

//     result += number;
//   }
//   return result;
// }

// console.log(sumNumbers([1, 3, 10, 50]));

function fib(n) {
  const numbers = [1, 1]; // 1
  let counts = 0;
  for (let i = 2; 1 < n + 1; i++) {  // 1
    console.log('Running'); // n - 1
    numbers.push(numbers[i - 2] + numbers[i - 1]); // n - 1
  }
  return numbers[n]; // 1
}

// T = 1 + 1 + 1 + 2 * (n - 1) = 3 + 2n - 2 = 1 + 2n = 2n = n
// => O(n) => Linier Time Complexity

console.log(fib(4));
// console.log(fib(5));
