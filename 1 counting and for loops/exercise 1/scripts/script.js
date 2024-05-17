'use strict';


function submitButton1() {
    
    let startingNumber = document.getElementById('starting-number-1').value;
    let endingNumber = document.getElementById('ending-number-1').value;
    let outputBox = document.getElementById('output-1');

    let outputString = 'output: ';

    if (startingNumber < endingNumber) {

        for (let i = startingNumber; i < endingNumber - 1; i++) {

            outputString += i + ', ';
        }
        outputString += endingNumber - 1;

        outputBox.innerText = outputString;

    } else if (startingNumber > endingNumber) {

        for (let i = startingNumber; i > endingNumber; i--) {

            outputString += ', ' + i;
        }

        outputBox.innerText = outputString;

    } else {
        outputBox.innerText = 'Error: starting and ending numbers are equal.'
    }
}



function submitButton2() {

    let startingNumber = parseInt(document.getElementById('starting-number-2').value);
    let numberDifference = parseInt(document.getElementById('number-difference').value);
    let numberCount = parseInt(document.getElementById('number-count').value);
    let outputBox = document.getElementById('output-2');

    let outputString = 'output: ';

    if (numberCount <= 0) {
        outputBox.innerText = 'Error: amount of numbers is too small.';

    } else {

        for (let i = 0; i < numberCount - 1; i++) {

            outputString += startingNumber + ', ';

            startingNumber += numberDifference;

        }

        outputString += startingNumber;

        outputBox.innerText = outputString;
    }
}