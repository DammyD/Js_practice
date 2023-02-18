// While loop: To repeat a block of code over and over again

// log out numbers 1 - 5
// This is not scalable
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

let initialNumber = 1;
let limit = 5;

while (initialNumber <= limit) {
    console.log(initialNumber)
    initialNumber++;
}

// Find a sum of positive  numbers less than 20
// let sum = 0;
// for (let i = 0; i < 20; i++) {
//     sum += i;
// }

// console.log(sum);

let sum = 0;
let num = 0;
while (num < 20) {
    sum += num;
    num++;
}
console.log(sum);

// Do...while loop

let number = 10;
let sumOfNumbers = 0;
do {
    // statement you want to execute
    sumOfNumbers += number;
    number++;

} while (number < 20);

console.log(sumOfNumbers);

/** The difference between of while and Do..while loop
 * while loop checks conditions first before executing what's in the loop body
 * The block of statement in a do while loop will be executed first before checking the conditions
 * */

// Break and Continue

// Break is like forcing an exit, it automatically stop the execution of the loop
// Continue will skip one of the execution of the loop and continue

let sumNumbers = 0;
let numbers = 10;

while (numbers < 20) {
    sumNumbers += numbers;
    numbers++;
    if (numbers > 15) {
        break;
    }
}

console.log(sumNumbers);

let sumOfOddNumbers = 0;
let initNumbers = 10;

while (initNumbers < 20) {
    sumOfOddNumbers += initNumbers;
    initNumbers++;
    if (initNumbers % 2 == 0) {
        continue;
    }
}

console.log(sumOfOddNumbers);


// For pr
for (let i = 1; i <= 5; i++)
{
     if (i == 4){
     continue;
     }
    console.log(i);
}


// function nearestPower(n) {
// if (n <= 0) {
// return "Please enter a number";
// }
// let power = 0;
// while  (2 ** power < n) {
//     power++;
// }

// return 2 ** power;
// }
// console.log(nearestPower(10));


function findNearestPowerOf2(num) {
    // check if the input is positive
    if (num <= 0) {
      return "Please enter a positive number.";
    }
  
    // find the nearest power of 2 to the input number using a for loop
    let power = 0;
    let i = 0;
    while (2 ** i < num) {
      power = i;
      i++;
    }
  
    // return the result
    return 2 ** power;
  }
  
  // example usage
  console.log(findNearestPowerOf2(10)); // output: 8
//   console.log(findNearestPowerOf2(20)); // output: 16
//   console.log(findNearestPowerOf2(40)); // output: 32