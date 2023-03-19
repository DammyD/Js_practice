let food = "mrBiggs";

let thePlace = "Rice, Chicken and Plantain";
let mrBiggs = "Rice, Chicken and Salad";


// let food = "rice, chicken and plantain";
// let restaurant = "The place";

// if (food === "rice, chicken," &&  restaurant === "The place") {
//     console.log("Get Food");
// } else if(food === "plantain" && restaurant === "Mr biggs") {
//     console.log("Get Food Now");
// } else {
//     console.log("Get from any where");
// }



switch (food) {
case "thePlace":
    console.log("Rice, Chicken and Plantain");
    break;
case "mrBiggs":
    console.log("Rice, Chicken and Salad");
    break;
default:
    console.log("Get from any where");
}

// program for a simple calculator
let result;

// take the operator input
const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the operand input
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

switch(operator) {
    case '+':
        result = number1 + number2;
        console.log(`${number1} + ${number2} = ${result}`);
        break;
    case '-':
        result = number1 - number2;
        console.log(`${number1} - ${number2} = ${result}`);
        break;
    case '*':
        result = number1 * number2;
        console.log(`${number1} * ${number2} = ${result}`);
        break;
    case '/':
        result = number1 / number2;
        console.log(`${number1} / ${number2} = ${result}`);
        break;

    default:
        console.log('Invalid operator');
        break;
}


// Loop statement

// for loop
// program to display the sum of natural numbers
let sumUp = 0;
const n = 100

// looping from i = 1 to n
// in each iteration, i is increased by 1
for (let i = 1; i <= n; i++) {
    sumUp += i;  // sum = sum + i
}

console.log('sum:', sumUp);

// while loop
let sum = 0;

// take input from the user
let number = parseInt(prompt('Enter a number: '));

while(number >= 0) {

    // add all positive numbers
    sum += number;

    // take input again if the number is positive
    number = parseInt(prompt('Enter a number: '));
}

// display the sum
console.log(`The sum is ${sum}.`);

// do...while loop

// to find the sum of positive numbers
// if the user enters negative number, the loop terminates
// negative number is not added to sum

let sumOne = 0;
let numberOne = 0;

do {
    sumOne += numberOne;
    numberOne = parseInt(prompt('Enter a number: '));
} while(numberOne >= 0)

console.log(`The sum is ${sumOne}.`);

// break statement

// program to print the value of i
for (let i = 1; i <= 5; i++) {
    // break condition     
    if (i == 4) {
        break;
    }
    console.log(i);
}

// nested for loops

// nested for loops

// first loop
for (let i = 1; i <= 5; i++) {

    // second loop
    for (let j = 1; j <= 3; j++) {
        if (i == 4) {
          break;
        }
        console.log(`i = ${i}, j = ${j}`);
    }
}

// contine

// program to print the value of i
for (let i = 1; i <= 5; i++) {

    // condition to continue    
    if (i == 3) {
        continue;
    }

    console.log(i);
}


