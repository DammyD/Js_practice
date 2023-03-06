// Arrays is one of the most popular way of storing data
// An object is an object and an array is an object
// A string can be an object if instantiate
// An array is an object that stores multiples values at once
// An array is typically represented with a square bracket
// You can create an array of any data type and also mixed data types


// Names of students in Odogunyan grammar school
let name1 = 'Daniel';
let name2 = 'Blessing';
let name3 = 'Onome';
let name4 = 'Rita';
let name5 = 'Lola';

// let names = []; empty array because there's nothing inside
// let obj = {}; empty object

// Creating an array

// Using an array literal(Literal notation)
// Most common method
let names = ['Daniel', 'Blessing', 'Onome', 'Rita', 'Lola'];

// Using the new keyword
// This is similar to a constructor function, Which means there is an inbuilt constructor function in JS that allows you to create an Array of Object
let names2 = new Array('Daniel', 'Blessing', 'Onome', 'Rita', 'Lola');
console.log(names);
console.log(names2);

let ages = [20, 25, 22, 28, 19]; //an array of numbers
console.log(ages);

// An Array is very flexible
let arrayOfMixedDataTypes = [30, 'Nigeria', false, {name: 'Dawodu'}, ['US', 'UK', 'Canada'], undefined];
console.log(arrayOfMixedDataTypes);


// Add elements to an array
// The push method allows you to add elements at the end of the array towards the right hand side

let countries = ['Libya'];
countries.push('Mali');
console.log(countries);
countries.push('Botsawna', 'Egypt');
console.log(countries);

// Adding elements to the beginning of an array
countries.unshift('Ghana');
console.log(countries);
countries.unshift('Kenya', 'Tanzania');
console.log(countries);

// Finding the length: means how many things can we find in that array
// syntax (array.length)
let numberOfCountries = countries.length;
console.log(numberOfCountries);
// console.log(countries.length);

let array1 = [];
console.log(array1.length)

// Accessing items in an array

// Every element in an array occupies a particular position and we call those positions indices but each position is called an index
// The index of Array in any lang. is represented with 0
// ['Kenya', 'Tanzania', 'Ghana', 'Libya','Mali', 'Botsawna', 'Egypt'];

const firstItem = countries[0]; //position - 1
console.log(firstItem);

// Accessing Egypt
// The value in the bracket here is a square value
const lastItem = countries[6];

// We have programmatically declare a statement that will always give us the last item
// The value in the square bracket here is a dynamic value meaning the value can change
const lastItem2 = countries[countries.length - 1];

console.log('Last Country is ' + lastItem);
console.log('Last Country is ' + lastItem2);

countries.push('Togo');
const lastItem3 = countries[countries.length - 1];
console.log('Last country is ' + lastItem3);

// Using the includes(): To crosscheck if an Array enters a value among its enteries
// it returns a boolean value
console.log(countries.includes('Mali'));

const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('Lion'));


// Removing elements from an array
// Removing the last elements in an array using pop()

console.log(countries);
countries.pop();
console.log(countries);

// Removing the first elements using shift()
countries.shift();
console.log(countries);


// If you want to access items removed at the end of the listed array
const removedElement = countries.pop();
console.log('The removed element is ' + removedElement);

// If you want to access items removed from the start of the listed array
const removedElementFirst = countries.shift();
console.log('The removed element is ' + removedElementFirst);


// Accessing the index of an item
console.log(countries.indexOf('Tanzania'));
console.log(countries);


