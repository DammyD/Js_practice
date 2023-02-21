
console.log('Hello World');
console.log('Vote for your preferred presidential candidate in the upcoming election');
document.getElementById('name').innerText = 'Coder coder';
document.getElementById('vote').innerHTML = 'Vote for your preferred presidential in the coming election';
console.log('Stutern Cohort 1.4');

// function that gets difference between two numbers
function subtract (number1, number2){
    return number1 - number2;
}

console.log(subtract(20, 5));

// Write a function that multiples two numbers. Call that function to multiply any two numbers of your choice and log the answer in your console

function multiply(num1, num2){

    return num1 * num2;
}

console.log(multiply(10, 5))

/**
 * create variables for your first name, last name, Stutern track, skills, 
 * favourite color, year of your country’s independence. 
 * Use these variables to form a sentence and log the sentence in the console.
 * */

let firstName = 'Blessing';
let lastName = 'Dawodu';
let stuternTrack = 'Frontend Engineer';
let skills = 'web development';
let favoriteColor = 'Black';
let countryIndependence = 1960;

console.log(firstName);
console.log(lastName);
console.log(stuternTrack);
console.log(skills);
console.log(favoriteColor);
console.log(countryIndependence);

console.log(`My name is ${firstName} ${lastName}. I am a ${stuternTrack} learning at Stutern. I have some basic ${skills} skills. My favorite color is ${favoriteColor}. The country I live in got her independence ${countryIndependence}.
`);
console.log('My name is ' + firstName + ' ' + lastName + '. I am a ' + stuternTrack + ' learning at Stutern. I have some basic ' + skills + ' skills. My favorite color is ' + favoriteColor + '. My Country Nigeria, got her Independence in October 1st ' + countryIndependence + '.');

