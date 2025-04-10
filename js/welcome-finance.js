const text = "Enter a ticker symbol for stocks or exchange traded funds  and click    'get quote'...Stock and etf lists can be found by clicking on the buttons in the bottom nav bar...";
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