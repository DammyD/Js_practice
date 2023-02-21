// Week 2
/** JavaScript Operators
 * Arithmetic operator
 * Assignment ''
 * Comparison ''
 * Logical ''
 * Bitwise ''
 * 
 * Arithmetic Operations is using opearators to perform one or more operations.
 */

// Arithmetic Operations
let a = 100;
let b = 45;

let sum = a + b;

let sumElement = document.getElementById('sum');
sumElement.innerText = sum;
console.log(sum);

let difference = a - b;

// let differenceElement = document.getElementById('difference');
// differenceElement.innerText = difference;
console.log(difference);

let multiplication = a * b;

// let multiplicationElement = document.getElementById('multiplication');
// multiplicationElement.innerText = multiplication;
console.log(multiplication);

let division = a / b;

// let divisionElement = document.getElementById('division');
// divisionElement.innerText = division;
console.log(division);

// Modulo Operator
let reminder = a % b;
console.log(reminder);

let c = 50;
let remainder = a % c;
console.log(remainder);

// Exponentiation Operator (**)
let exponentResult = c ** 3;
console.log(exponentResult);

// Increment(++) & Decrement(--) Operators
let initialValue = 43;
initialValue++; // same as initialValue = initialValue + 1;
console.log(initialValue);

let age = 30;
age--;
console.log(age);

let numberOfCars = 66;
// ++numberOfCars;
console.log('number of cars is ' + ++numberOfCars);

let numberOfOranges = 99;
console.log('I now have  ' + numberOfOranges++ + ' oranges');

++numberOfOranges // 100 => (1 + 99)
numberOfOranges++ //  99 add 1 in the next variable caall

// Assignment Operation
let x = x + 1; // is the same as let x++
let y = y - 1; // is the same as let y--

let z = z + 6; // let z += 6;
let w = w - 6; // let w -= 6;
let p = p * 6; // let p *= 6;
let q = q / 6; // let q /= 6;

// Comparison Operator (<, >, <=, >=, ,)
let d = -34;
console.log(d > 10);

