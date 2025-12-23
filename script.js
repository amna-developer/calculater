// This gets the display element from the HTML
const display = document.getElementById('display');

// Adds numbers or operators to the screen
function appendToDisplay(input) {
    display.value += input;
}

// Clears everything
function clearDisplay() {
    display.value = "";
}

// Deletes the last character typed
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Does the actual math calculation
function calculate() {
    try {
        // eval() takes the string (like "2+2") and turns it into a number (4)
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}