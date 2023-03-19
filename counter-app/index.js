// Initial value of the counter
let count = 0;


// get all the elemnts we want to work with
let displayElement = document.getElementById("display");
let incrementButtonElement = document.getElementById("increment");
let decrementButtonElement = document.getElementById("decrement");
let resetButtonElement = document.getElementById("reset");

// this increases the count by 1 
// and assigns the value of count to the display element
function increaseCount() {
    count++; 
    displayElement.textContent = count;
}


// this decreases the count by 1
// and assigns the value of count to the display element
function decreaseCount() {
    // decrease count if not equals to 0
    if(count !== 0) {
        count--;
    }
    displayElement.textContent = count;
}


// this resets the count to 0
// and assigns the value of count to the display element
function resetCount() {
    count = 0;
    displayElement.textContent = count;
}

incrementButtonElement.addEventListener("click", increaseCount);
decrementButtonElement.addEventListener("click", decreaseCount);
resetButtonElement.addEventListener("click", resetCount);