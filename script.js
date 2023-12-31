const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

for (let i = 0 ; i < operators.length ; i++) {
    operators[i].addEventListener("click", function() {
        if (this.id == "clear") {
            printOutput("");
            printHistory("");
        }
        else if (this.id == "backspace") {
            let output = reverseNumberFormat(getOutput()).toString();
            if (output) {
                output = output.substr(0, output.length - 1);
                printOutput(output);
            }
        }
        else {
            let output = getOutput();
            let history = getHistory();
            if (output == "" && history != "") {
                if (isNaN(history[history.length - 1])) {
                    history = history.substr(0, history.length - 1);
                }
            }
            if (output != "" || history != "") {
                output = output == "" ? output : reverseNumberFormat(output);
                history += output;
                if (this.id == "=") {
                    const result = eval(history);
                    printOutput(result);
                    printHistory("");
                }
                else {
                    history = history + this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
    });
}
for (let i = 0 ; i < numbers.length ; i++) {
    numbers[i].addEventListener("click", function() {
        let output = reverseNumberFormat(getOutput());
        if (output != NaN) {
            output += this.id;
            printOutput(output);
        }
    });
}


function getHistory() {
    return document.querySelector(".history-value").innerText;
}
function printHistory(num) {
    document.querySelector(".history-value").innerText = num;
}
function getOutput() {
    return document.querySelector(".output-value").innerText;
}
function printOutput(num) {
    if (num == "") {
        document.querySelector(".output-value").innerText = num;
    }
    else {
        document.querySelector(".output-value").innerText = getFormattedValue(num);
    }
}
function getFormattedValue(num) {
    if (num == "-") {
        return "";
    }
    const toNumber = Number(num);
    const value = toNumber.toLocaleString("en");
    return value;
}
function reverseNumberFormat(num) {
    return Number(num.replace(/,/g, ""));
}
const body = document.body;
const calculatorBase = document.querySelector(".calculator-base");
const darkBtn = document.querySelector(".dark");
const lightBtn = document.querySelector(".light");
const output = document.querySelector(".output-value");
const hr = document.querySelector("hr");
const equal = document.querySelector(".equal-to");
const empty = document.querySelectorAll(".empty");

function setLightMode() {
    body.style.background = "lightcyan";
    calculatorBase.style.background = "beige";
    calculatorBase.style.border = "2px solid black";
    output.style.color = "black";
    lightBtn.style.background = "steelblue";
    darkBtn.style.background = "antiquewhite";
    hr.style.border = "0.1px solid steelblue";

    for (let i = 0 ; i < numbers.length ; i++) {
        numbers[i].style.background = "beige";
        numbers[i].style.color = "black";
    }

    for (let i = 0 ; i < operators.length ; i++) {
        operators[i].style.background = "beige";
    }

    for (let i = 0; i < empty.length; i++) {
        empty[i].style.background = "beige";
    }

    equal.style.color = "beige";
    equal.style.background = "#ec5f00";
}
function setDarkMode() {
    body.style.background = "#282828";
    calculatorBase.style.background = "black";
    calculatorBase.style.border = "2px solid #9c96967b";
    output.style.color = "beige";
    lightBtn.style.background = "antiquewhite";
    darkBtn.style.background = "steelblue";
    hr.style.border = "0.1px solid #ceffffcc";

    for (let i = 0 ; i < numbers.length ; i++) {
        numbers[i].style.background = "black";
        numbers[i].style.color = "beige";
    }

    for (let i = 0 ; i < operators.length ; i++) {
        operators[i].style.background = "black";
    }

    for (let i = 0; i < empty.length; i++) {
        empty[i].style.background = "black";
    }

    equal.style.color = "beige";
    equal.style.background = "#ec5f00";
}
lightBtn.addEventListener("click", setLightMode);
darkBtn.addEventListener("click", setDarkMode);