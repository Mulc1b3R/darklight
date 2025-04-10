const text =
    "Welcome to the Darklight engine. Please enter a keyword or phrase and click Search to continue.";
const printOutElement = document.getElementById("print-out");

function printText(index) {
    if (index < text.length) {
        printOutElement.innerHTML += text[index];
        index++;
        setTimeout(function() {
            printText(index);
        }, 50); // Adjust the timeout (in milliseconds) to control printing speed
    }
}

// Initiate the printing effect when the page loads
document.addEventListener("DOMContentLoaded", function() {
    printText(0);
});