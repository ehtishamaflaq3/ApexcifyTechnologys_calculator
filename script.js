let display = document.getElementById("display");
function append(value) {
    display.value = display.value + value;
}
function clearDisplay() {
    display.value = "";
}
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
document.addEventListener("keydown", function(event) {
if (!isNaN(event.key) || event.key === "+" || event.key === "-" || event.key === "*" || event.key === "/") {
        append(event.key);
    }
    else if (event.key === "Enter") {
        calculate();
    }
    else if (event.key === "Backspace") {
        display.value = display.value.slice(0, -1);
    }
    else if (event.key === "c" || event.key === "C") {
        clearDisplay();
    }
});