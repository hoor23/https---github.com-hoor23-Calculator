let buttons = document.querySelectorAll('.button');
let expr = document.querySelector(".expr");
let outPutString = "";
let expression;
let resultCheck = false;
let expressionCheck = false;
let secondOperand;
let slider = document.querySelector(".slider");
Array.from(buttons).forEach((buttons) => {
    buttons.addEventListener('click', (e) => {
        if (e.target.innerHTML == "=") {
            if (document.querySelectorAll('.display-input').innerHTML != "") {
                outPutString = eval(expression);
                document.querySelector('.display-input').value = outPutString;
                expr.value = expr.value + "=" + outPutString;
                resultCheck = true;
            }

            else {
                document.querySelector('.display-input').value = "Undefined";
            }
        }
        else if (e.target.innerHTML == "RESET") {
            outPutString = "";
            document.querySelector('.display-input').value = outPutString || "0";
            expr.value = outPutString;
        }
        else if (e.target.innerHTML == "DEL") {
            outPutString = document.querySelector('.display-input').value.slice(0, -1);
            document.querySelector('.display-input').value = outPutString;
        }
        else {
            if (resultCheck == true) {
                outPutString = "";
                expr.value = "";
                document.querySelector('.display-input').value = outPutString;
                resultCheck = false;
            }
            if (['+', '-', 'x', '/'].includes(e.target.innerHTML)) {
                if (e.target.innerHTML == "x") {
                    e.target.innerHTML = "*";
                }
                document.querySelector('.display-input').value = outPutString|| "0";
                expr.value = outPutString + e.target.innerHTML;
                expression = outPutString + e.target.innerHTML;
                expressionCheck = true;
            }
            else {
                outPutString = outPutString + e.target.innerHTML;
                expression = expr.value + e.target.innerHTML;
                
                document.querySelector('.display-input').value = outPutString ||"0";
                if (expressionCheck == true) {
                    expr.value = expression;
                    expressionCheck = false;
                }

            }


        }
    })
});