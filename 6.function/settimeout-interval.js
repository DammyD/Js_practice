// setTimeout and setInterval
// setTimeout allows you to execute some line of statements after a particular number of time. It can also be referred to a HOF because it accepts callback function
// setInterval allows you to execute statements at intervals

// The setTimeout is a HOF, it takes in two arguments
// first it takes a callbackFunction, the function you want to callback or execute
// the second the time that must elapsed before the callbackFunction is executed. This is written in millisecond(ms)
// 1000ms = 1 second
// setTimeout(callbackFunction, time)

// Log 'Hello Stutern Learners' after 1 second

function logMessage(){
    console.log('Hello Stutern Learners')
}
setTimeout(logMessage, 10000);

//  OR
setTimeout(function () {
    console.log('Hello Stutern Learners');
}, 10000);

// OR
setTimeout(() => console.log('Hello Stutern Learners'), 10000);

// setInterval


// Log 'Hello Stutern Learners' after every 2 second

// setInterval(callbackFunction, interval)
setInterval(() => console.log('Hello Stutern Learners'), 2000);


// Log 'Hello Stutern Learners' after every 2 second. Cancel operation after 20 seconds.

let timerId = setInterval(() => console.log('Hello Stutern Learners'), 2000);

setTimeout(function() {
    clearInterval(timerId);
    console.log('Interval has been terminated');
}, 20000);


// clearTimeout(timerId)

// Closure
// A closure is when a function is able to access variables from an outer function that is already been returned
function parentFunction(a) {
    return function childFunction(b) {
        return a + b;
    }
}

parentFunction(8);
// console.log(parentFunction(8));
parentFunction(8)(5);
console.log(parentFunction(8)(5));

/**
 * childFunction (8) {
 * return 8 + 5;
 * }
 */

// parentFunction(8);
// returns 
// function childFunction(b) {
//     return 8 + b;
// }

// parentFunction(8)(5);
// function childFunction(b) {
//     return 8 + b;
// }

// childFunction(5) => 8 + 5 = 13

//  A closure is a phenomenal that happens when a function(childFunction) is able to access variables from an outer function

function greet () {
    let name = 'John';

    function displayName () {
        return 'Hi ' + name;
    }
    return displayName;
}

let greet1 = greet();
console.log(greet1);
console.log(greet1());

function calculate(x) {
    function multiply (y) {
        return x * y
    }
    return multiply;
}

const multiply3 = calculate(3);
const mult1 = multiply3(6);

//  OR
const mult2 = calculate(3)(6);
console.log(mult1);
console.log(mult2);