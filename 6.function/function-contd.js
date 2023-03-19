// Higher order function helps us reduce code duplication

// function declaration
function addTwoNumbers(a, b) {
    return a + b;
};

console.log(addTwoNumbers(3, 4));

// function expression
let minusTwoNumbers = function(a, b) {
    return a - b;
};

console.log(minusTwoNumbers(6, 4));

// Using the arrow function
let divideTwoNumbers = (a, b) => {
    return a / b;
};

console.log(divideTwoNumbers(10, 5));

// a, b are what we call parameters
// function passed in as parameter is called a callback function

// A higher order function is a function that accept another function as a parameter and returns a function as it result

// function sendMessage (message, fn) {
//     return fn(message)
// }

// sendMessage('Hello Jibola', console.log);
// // sendMessage - is a higher order function
// // fn - call back function(reference)
// // You do not add parenthesis at the point where you call back a function as a parameter

// // Referencing a function vs calling a function
// // console.log is different from console.log()

// // sendMessage
// // sendMessage()
// // A function that does not have a parenthesis is a reference function
// // A function with parenthesis is a callback function

// // Q: Write a function that sends a message
// function sendMessageWithConsole(message) {
//     console.log(message);
// };

// sendMessageWithConsole('Hello Mary');

// function sendMessageWithAlert(message) {
//     alert(message);
// };

// sendMessageWithAlert('Hello Jennifer');

// function sendMessageWithConfirm(message) {
//     confirm(message);
// };

// sendMessageWithConfirm('Hello Bayo');

// function sendMessageWithPrompt(message) {
//     prompt(message);
// };

// sendMessageWithPrompt('Hello Joy');

// Higher Order Function
// function sendMesssageHOF(message, callbackFunction) {
//     callbackFunction(message)
// };
// sendMesssageHOF('Hello Joy', console.log);
// sendMesssageHOF('Hello Joy', alert);
// sendMesssageHOF('Hello Joy', confirm);
// sendMesssageHOF('Hello Joy', prompt);

// Q: Write a solution that calculates the area and the diameter of a circle given the radii [1, 2, 3] and returns the output for each radius in an array.

// area of a circle = PI * radius ** 2
function calculateArea(radii) {
    const result = [];
    for (let i = 0; i < radii.length; i++) {
        let area = Math.PI * radii[i] ** 2;
        result.push(area);
    }
    return result;
};
let arrayOfAreas = calculateArea([1, 2, 3])
console.log(arrayOfAreas)

// diameter of a circle = 2 * radius
function calculateDiameter(radii){
    const result = [];
    for (let i = 0; i < radii.length; i++) {
        let diameter = 2 * radii[i];
        result.push(diameter);
    }
    return result;
}

let arrayOfDiameters = calculateDiameter([1, 2, 3]);
console.log(arrayOfDiameters);


// Calculate the circumference of the circle
// circumference - 2 * PI * radius

function calculateCircumference(radii) {
    const result = [];
    for(let i = 0; i < radii.length; i++) {
        let circumference = 2 * Math.PI * radii[i];
        result.push(circumference);
    }
    return result;
}

let arrayOfCircumference = calculateCircumference([1, 2, 3]);
console.log(arrayOfCircumference);

// HOF and Callbacks
console.log('DEMONSTRATIONS OF HIGHER ORDER FUNCTIONS AND CALLBACK FUNCTIONS');
function area(radius) {
    let area = Math.PI * radius ** 2;
    return area;
}

function diameter(radius) {
    let diameter = 2 * radius;
    return diameter;
}

function circumference(radius) {
    let circumference = 2 * Math.PI * radius;
    return circumference;
}

function circleOperation(radii, callbackFunction) {
    const result = [];
    for (let i = 0; i < radii.length; i++) {
        let operation = callbackFunction(radii[[i]]) // Dynamic operation
        result.push(operation)
    }
    return result;
}

let areas = circleOperation([1, 2, 3], area);
console.log(areas);

// Any function you pass a parameter into it are called callback function

const usingMap = radii.map(function (radius) {
    return radius * 2;
});

const usingMapToCalCDiameter = [1, 2, 3].map(diameter);
console.log(usingMapToCalCDiameter);

