// splice() is an array method can be used to add, remove and replace at any point in the array
// The splice method takes in 1 - 4 args
// (start) - From what index do you want to start your operation?

// (deleteCount) - How many of array elements do you want to remove starting from the index?

// (item1...itemN)  - elements you want to insert into the array

// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2, item3)

let currencies = ['NGN', 'USD', 'YEN', 'EURO'];
// currencies.unshift('GBP');

// Adding 4 items to the beginning of the array
// currencies.splice(0, 0, 'GBP', 'CAD', 'CEDIS', 'ZAR');

// Inserting elements in between and array
// currencies.splice(2, 0, 'GBP', 'CAD', 'CEDIS', 'ZAR');

// Add elememts at the end of an array
// currencies.splice(4, 0, 'GBP', 'CAD', 'CEDIS', 'ZAR');

// In cases you dont know the numbers of arrays
// currencies.splice(currencies.length, 0, 'GBP', 'CAD', 'CEDIS', 'ZAR');

// removing element(s) in an array
// currencies.splice(1, 2);

// replace element(s) in an array
// currencies.splice(1, 2, 'GBP', 'CAD', 'CEDIS', 'ZAR');

// let removedElements = currencies.splice(1, 2, 'GBP', 'CAD', 'CEDIS', 'ZAR');
// console.log('The removed elements are ' + removedElements);

currencies.splice(1, 1); //remove USD
console.log(currencies);

currencies.splice(2, 1, 'AUD', 13) //remove Euro
console.log(currencies);

// Merging arrays
// Using the concat() method

let cheapCars = ['Audi', 'Mazda', 'Nissan'];
let expensiveCars = ['Lamborghini', 'Ferrari', 'Maseratti'];

// let allCars = cheapCars.concat(expensiveCars);
// console.log(allCars);

let commonCars = ['Honda', 'Toyota', 'Mercedes'];
let allCars = cheapCars.concat(expensiveCars).concat(commonCars);
console.log(allCars);

// How do you know if an element is present in an array?
// Using indexOf()
let FerrariIndex = allCars.indexOf('Ferrari');
console.log(FerrariIndex);

// When your output is a negative value, it means the item doesn't exsit
let KiaIndex = allCars.indexOf('Kia'); 
console.log(KiaIndex); 

// Add kia to list of cars if not present
if(KiaIndex == -1) {
    allCars.push('Kia');
}

console.log(allCars);

if(FerrariIndex == -1) {
    allCars.push('Ferrari');
} else {
    console.log('Ferrari is already present');
}

console.log(allCars);

// Using includes()
let FerrariInclude = allCars.includes('Ferrari');
console.log(FerrariInclude);

let isFerrariPresent = allCars.includes('Ferrari');
console.log(isFerrariPresent);

if(isFerrariPresent) {
    console.log('Ferrari is already present');
} else {
    allCars.push('Ferrari');
}

console.log(allCars);
/** Practice this common array methods used
 * array.filter()
 * array.map()
 * */

