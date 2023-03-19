// The DOM (Documemt Object Model) is an interface that allows us to program the structure and the content of your HTML documents
// XML - Extensible markup language
// SVG - Scalable vector graphics
// The DOM is like a middle layer that allows javaScript to makes changes to the HTML files
// The DOM is an object based model
// The DOM is an API(Application Programming Interface)
// The DOM is not a programming language either is it a framework or a library
// The DOM is language and platform argnostic: Not restricted to JavaScript alone

/** Characteristics of a DOM 
 * It can be used to select element in HTML
 * It can be used to add, remove or replace element in HTML
 * It can be used to change the style, modify and include more styles to an element
 * The easiest way by which you can access element in the DOM is by their 'id'
*/

// accessing the body element by id

let bodyElement = document.getElementById("container");
console.log(bodyElement);

let everyoneElement = document.getElementById("everyone")
console.log(everyoneElement);

// accessing element using query selector

let container = document.querySelector("#container");
console.log(container);
// The beauty of the querySelector is 'multi-purpose'

let helloDiv = document.querySelector(".hello");
console.log(helloDiv);

// accessing element by class name

let helloByClassName = document.getElementsByClassName("hello");
// console.log(helloByClassName);

let helloByClassName2 = document.querySelectorAll(".hello");
console.log(helloByClassName2);

// accessing elemets by tag name
let buttonElement = document.getElementsByTagName("button");
console.log(buttonElement);

// querySelectorAll(only work on class elements) - will return a nodeList
// getElementsByClassname/TagName - will return an HTMLCollection. To access individual collecting you'll use the bracket notation []
// querySelector(class) - will return the first element with the classname but be can used to select either 'class and id'

// DOM Manipulation
// let helloElements = document.getElementsByTagName("div")[0];
// console.log(helloElements);
// helloElements.innerHTML = "Good morning Stutern learners!";

// let everyoneElem = document.getElementsByTagName("div")[1];
// everyoneElem.innerText = "I hope you all are enjoying JavaScript?";

// The difference between innerHTML and innerText
// innerHTML - Allows you to work with HTML <p>...</p>
// innerText - Renders the content within a tag as if it was a plain text (it doesn't transcribe it)

// helloElements.style.color = 'green';
// helloElements.style.backgroundColor = 'red';
// helloElements.style["background-color"] = 'pink';

// let stuternDiv = document.getElementById("stutern");
// stuternDiv.style.color = 'teal';
// stuternDiv.style.fontSize = '60px';


// CREATING AN ELEMENT
let paragraphElem = document.createElement("p");
paragraphElem.innerText = "We are celebrating International Women's Day!";

// APPENDING AN ELEMENT
let body = document.getElementById("element-creation");

body.appendChild(paragraphElem);

// REMOVE AN ELEMENT
// get the element you want to remove
let questionElem = document.querySelector("#question");
// get the parent element (see append body above)
body.removeChild(questionElem);

// CHANGING MULTIPLE ELEMENTS
let holidays = document.querySelectorAll(".holiday");

for (let i = 0; i < holidays.length; i++){
    // holidays[i].style.backgroundColor = "blue";
    // holidays[i].style.color = "white";
    // holidays[i].style.margin = "4px";
    holidays[i].style = "background-color: yellow; color: purple; font-size: 20px; margin: 4px";
}

// EVENTS
// An event is an action that occur on the webpage
// Events can triggered by a user or a broswer

// ADDING EVENTLISTENER / EVENT HANDLER

let wishButton = document.getElementById("wish-button");
// Method 2
// wishButton.onclick = function() {
//     alert("Happy International Women's Day");
// }

// Method 3
// wishButton.addEventListener("click", function () {
//     alert("Wishing you a Happy International Women's Day");
// });

const alertMessage = function (){
    alert("Wishing you a Happy International Women's Day");
}

wishButton.addEventListener("click", alertMessage);
// Remove an event listener
let removeEventButton = document.getElementById("remove-event-button");

removeEventButton.addEventListener("click", function() {
    wishButton.removeEventListener("click", alertMessage);
    alert("Remove event");
})

// Accessing the value of what has been clicked on

for (let i = 0; i < holidays.length; i++) {
    holidays[i].addEventListener('click', function (event) {
        alert('The Holiday clicked on is' + event.target.innerText)
    })
}