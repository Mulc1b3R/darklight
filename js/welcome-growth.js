const text = "Enter a ticker symbol to get company growth data...";
// Define the text with line breaks after every 50 characters
const printOutElement = document.getElementById("print-out");

function printText(index) {
    if (index < text.length) {
        if (index % 59 === 0 && index > 0) {
            printOutElement.innerHTML += "<br>";
        }
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