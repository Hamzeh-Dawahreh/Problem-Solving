// 1-Fibonacci Series:

// function fibonacci(num) {
//   let arr = [0, 1];
//   for (let i = 2; i <= num; i++) {
//     arr.push(arr[i - 1] + arr[i - 2]);
//   }
//   return arr;
// }

// console.log(fibonacci(10));

// 2-The sum of Array Elements:

// function arraySum(arr) {
//   if (arr.length === 0) {
//     return 0;
//   } else {
//     return arr[0] + arraySum(arr.slice(1));
//   }
// }

// console.log(arraySum([1, 2, 3, 4, 5]));
// console.log(arraySum([10, -5, 7, 2]));
// console.log(arraySum([]));

function sumArray(arr, n) {
  if (n <= 0) {
    return 0;
  } else {
    return arr[n - 1] + sumArray(arr, n - 1);
  }
}

// example usage
let arr = [1, 2, 3, 4, 5];
let n = arr.length;
console.log(sumArray(arr, n)); // prints 15

// 3 Reverse a String:

// function reverseString(str) {
//   if (str.length <= 1) {
//     return str;
//   } else {
//     return reverseString(str.slice(1)) + str[0];
//   }
// }
// console.log(reverseString("hezmaH"));
//Hamzeh
//ezmaH h
// zmaH e h
// maH z e h
//ah m z e h
// H a m z e h
