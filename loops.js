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
// Log out numbers 1 - 100

// for (initialExpression; condition; expressionUpdate (increment)){
// // for loop body
// }

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
// console.log(1 + 2 + 3 + 4 + 5);
let sum = 0;
for (let index = 1; index <= 5; index++) {
    sum += index;
}
console.log('Sum is ' + sum);