// LOOPS: Are use to repeat a block of code

/**
 * For loop
 * While loop
 * Do while loop
 */


// FOR LOOP
/**
 * let index = 0 // initial expression
 * index < array.length; //condition
 * index++ //update to intial expression
 */

// Breakdown of the For loop syntax
/** 
 * The initialExpression initializes and/or declares variables and executes only once.
 * The condition is evaluated. 
 *  - If the condition is false, the for loop is terminated.
 *  - If the condition is true, the block of code inside of the for loop is executed.
 * The expressionUpdate updates the value of initialExpression when the condition is true.
 * The condition is evaluated again. This process continues until the condition is false.
*/

// for (initialExpression; condition; expressionUpdate (increment)){
// // for loop body
// }

// Log out numbers 1 - 100
console.log(1);
console.log(2);
console.log(3);
console.log(1);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);



for (let index = 1; index <= 100; index++) {
    console.log(index);
}

// let js = 'I love JavaScipt';
// for (let js = 1; js <= 7; js++) {
//     console.log(js);
    
// } // This would ouput numbers

for (let js = 1; js <= 7; js++) {
    console.log('I love JavaScript');
}

// log out the sum of numbers from 1 - 5
console.log(1 + 2 + 3 + 4 + 5);
let sum = 0;
for (let index = 1; index <= 5; index++) {
    sum += index; //sum = sum + index;
}
console.log('Sum is ' + sum);