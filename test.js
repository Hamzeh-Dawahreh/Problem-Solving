// Mubashir has written a mysterious function that takes
//  two numbers a and b and returns multiplication?. Solve the
//  riddle of what Mubashir's function is by having a look at some of the examples below.
//  mubashirFunction(0, 1) ➞ 0

//  mubashirFunction(1, 2) ➞ 2

//  mubashirFunction(10, 10) ➞ 1

// function mubashirFunction(a, b) {
//   let firstNumber = String(a)
//     .split("")
//     .map((ele) => parseInt(ele))
//     .reduce((acc, curr) => acc + curr);
//   let secondNumber = String(b)
//     .split("")
//     .map((ele) => parseInt(ele))
//     .reduce((acc, curr) => acc + curr);

//   let result = parseInt(firstNumber * secondNumber);
//   console.log(result);
// }

// mubashirFunction(116, 22);

////////////////////////////////////////////////////////////

// Create a function which returns the number of true values there are in an array.

// Examples
// countTrue([true, false, false, true, false]) ➞ 2

// countTrue([false, false, false, false]) ➞ 0

// countTrue([]) ➞ 0

// function countTrue(arr) {
//   let count = 0;
//   arr.map((element) => {
//     if (element == true) {
//       count++;
//     }
//   });
//   return console.log(count);
// }
// countTrue([true, false, true, false, true, true]);

////////////////////////////////////////////////////////////
// Write a function redundant that takes in a string str and returns a function that returns str.

// Examples
// const f1 = redundant("apple")
// f1() ➞ "apple"

// const f2 = redundant("pear")
// f2() ➞ "pear"

// const f3 = redundant("")
// f3() ➞ ""

// function redundant(str) {
//   return () => str;
// }
// console.log(redundant("apple"));

////////////////////////////////////////////////////////////

// In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided die. If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.

// Can you reach your friend's tile number in the next roll? Create a function that takes your position a and your friend's position b and returns a boolean representation of whether it's possible to earn a bonus on any die roll.

// Examples
// possibleBonus(3, 7) ➞ true

// possibleBonus(1, 9) ➞ false

// possibleBonus(5, 3) ➞ false

// function possibleBonus(a, b) {
//   if (b - a <= 6 && b > a) {
//     return true;
//   } else return false;
// }
// console.log(possibleBonus(1, 13));

///////////////////////////////////////////////

// The right shift operation is similar to floor division by powers of two.

// Sample calculation using the right shift operator ( >> ):

// 80 >> 3 = floor(80/2^3) = floor(80/8) = 10
// -24 >> 2 = floor(-24/2^2) = floor(-24/4) = -6
// -5 >> 1 = floor(-5/2^1) = floor(-5/2) = -3
// Write a function that mimics (without the use of >>) the right shift operator and returns the result from the two given integers.

// Examples
// shiftToRight(80, 3) ➞ 10

// shiftToRight(-24, 2) ➞ -6

// shiftToRight(-5, 1) ➞ -3

// shiftToRight(4666, 6) ➞ 72

// shiftToRight(3777, 6) ➞ 59

// shiftToRight(-512, 10) ➞ -1

// function shiftToRight(x, y) {
//   let result = Math.pow(2, y);

//   let result1 = Math.floor(x / result);
//   return result1;
// }

// console.log(shiftToRight(4666, 6));

/////////////////////////////////////////////////////////////

// Write a function that takes a number and returns the perimeter of either a circle or a square. The input will be in the form (letter l, number num) where the letter will be either "s" for square, or "c" for circle, and the number will be the side of the square or the radius of the circle.

// Use the following formulas:

// Perimeter of a square: 4 * side.
// Perimeter of a circle: 6.28 * radius.
// The catch is you can only use arithmetic or comparison operators, which means:

// No if... else statements.
// No objects.
// No arrays.
// No formatting methods, etc.
// The goal is to write a short, branch-free piece of code.

// Examples
// perimeter("s", 7) ➞ 28

// perimeter("c", 4) ➞ 25.12

// perimeter("c", 9) ➞ 56.52


function perimeter(l, num){
return 4
}