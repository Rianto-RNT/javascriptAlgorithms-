// function isPrime(number) {
//   for (let i = 2; i < Math.sqrt(number); i++) {
//     // 1
//     console.log("Running");
//     if (number % i === 0) {
//       // n
//       return false; // 1
//     }
//   }
//   return true; // 1
// }

// // best case: number = 1 OR number = 2 O(1)
// // Average case: number = 27,277 => O(n) (Improved: O(sqrt(n)))

// console.log(isPrime(27277));
// // console.log(isPrime(5));
// // console.log(isPrime(9));

function cartProduct(setA, setB) {
  const product = [];

  for (const setAEL of setA) {
    for (const setBEL of setB) {
      product.push([setAEL, setBEL]);
    }
  }

  return product;
}

const colors = ["blue", "red"];
const sizes = ["s", "m", "l", "xl"];
console.log(cartProduct(colors, sizes)); // [['blue', 'm', ...]]


// Big O ?