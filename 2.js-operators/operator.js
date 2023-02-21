//  LHS -Left Hand Side
// RHS Right Hand Side

let cash = 2000;
let Goodexpenses = 4000;
cash > 2000;

//  Equality Operator(!=, !==, ==, ===)

let expenses = '2000';
console.log(cash == expenses);
console.log(cash === expenses);

console.log(true == 0);

//  Ternary Operator (condition) ? :
let myAge = 34;
// if age  is greater than or equal to 18, print 'Eligible to vote'
//  if age is less than 18, print 'Not Eligible to vote'
// (condition) ? true : false

(myAge >= 18) ? console.log('Eligible to Vote') : console.log('Not Eligible to Vote');

// Logical Operators

let nationality = 'American';
(myAge >= 18 && nationality === 'Nigerian') ? console.log('Eligible to Vote') : console.log('Not Eligible to Vote');

//  AND OPERATO - &&
//  OR OPERATOR - ||

// true && true = true
// false && true = false
// true && false = false
// false && false = false

// true || true = true
// false || true = false
// true || false = true
// false || false = false

let WAEC ='PASS';
let NECO = 'PASS';
(WAEC === 'PASS' || NECO === 'PASS') ? console.log('Admitted') : console.log('Not Admitted');

// Operator Precedence
// BODMAS -> Bracket, of Division, Multiplicatio, Addition and Subtraction
// PEMDAS -> Parenthesis, Exponent, Multiplication, Division, Addition, and Subtraction

const result = (26 -2) + 4 / 2;
console.log(result);

// Truty values
// Falsy Values
