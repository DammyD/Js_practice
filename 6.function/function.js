/** Practice this common array methods used
 * array.filter()
 * array.map() - when you want to transform all the elements in an array
 * array.reduce() -  returns a similar value
 * array.find() //to find if an array exist. It takes in a function call a callback function also it has a sort of looping logic in it
 * */

// Q: convert all cars to uppercase

let cheapCars = ['Audi', 'Mazda', 'Nissan'];
let expensiveCars = ['Lamborghini', 'Ferrari', 'Maseratti'];

// let allCars = cheapCars.concat(expensiveCars);
// console.log(allCars);

let commonCars = ['Honda', 'Toyota', 'Mercedes'];
let allCars = cheapCars.concat(expensiveCars).concat(commonCars);
// console.log(allCars);

let allCarsInUpperCase = allCars.map(function (item){
    return item.toUpperCase();
});

console.log(allCarsInUpperCase);


// Functions are one of the fundamental building block in programming
// They are used to perform a set of operation. They can be reused multiple times
// They always return an output


// function that caps bottles
// defining a function
function bottleCapper(bottle, cap) {
    // return bottle + cap; //shorthand format of returning a statement
    let result = bottle + cap; // instruction
    return result; // output
}

// call/run/execute/invoke
let cocacolaBottle = bottleCapper('transparent bottle', 'red cap');
console.log(cocacolaBottle);

// Two ways to define a function
//  - Function declaration
function bottleCapper(bottle, cap) {
    // return bottle + cap //shorthand
    let result = bottle + ' and ' + cap; //instruction
    return result; //output
}

// Function expression
// the name of the function does not come after the function keyword
// The variable that the function is assign to assumes the name of the function(functionName)
const bottleCapper2 = function (bottle, cap) {
    let result = bottle + ' and ' + cap; //instruction
    return result; //output
}

let spriteBottle = bottleCapper2('transparent bottle', 'green cap');
console.log(spriteBottle);

// Function Expression Using arrow method / Arrow function expression
// => replaces the function keyword
// the {} is optional
// Whenever we use the arow function without curly braces {}, we don't need a return keyword
const bottleCapper3 = (bottle, cap) => bottle + ' and ' + cap;
const fantaBottle = bottleCapper3('transparent bottle', 'orange cap');
console.log(fantaBottle);

const bottleCapper4 = (bottle, cap) => {
    // return bottle + ' and ' + cap;
    let result = bottle + ' and ' + cap;
    return result;
}
// Parameter are container that takes in the arguments

// function without arguments
function greet(){
    return 'Hello Stutern learners'
};
console.log(greet());

// function with arguments
function greet2(name) {
    return 'Hello ' + name;
}

console.log(greet2('Tina'));

// By default every function has a return statement
function greet3() {
    console.log('Hello World');
};
// there is a return keyword here that returns undefined
greet3();

// A callback function can be pass as a parameter into another function

function sayHi() {
    return 'Hi ';

}

function greetings(name, sayHi) {
    return sayHi() + name;
}

console.log(greetings('Daniel', sayHi));

function createCar(){
    return {
        name: 'Toyota',
        model: 'Avensis'
    }
}

const createCar = function () {
    return {
        name: 'Toyota',
        model: 'Avensis'
    }
}

// function () becomes () => : Meaning the arrow key eliminate the function keyword

const createCar = () => {
    return {
        name: 'Toyota',
        model: 'Avensis'
    }
}