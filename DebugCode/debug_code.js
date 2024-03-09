function performOperation() {
// Get user input from input fields
let num1 = parseInt(document.getElementById('input1').value);
let num2 = parseInt(document.getElementById('input2').value);
// Check if inputs are valid numbers
if (!isNaN(num1) && !isNaN(num2)) {
    // Perform the operation
    let result = multiply(num1, num2);

    // Display the result
    displayResult(result);
    } else {
        displayResult('Please enter valid numbers');
    }
}

function performOperation2() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        // Perform the operation
        let result = findpossiblenumber(num1, num2);

        // Display the result
        displayResult(result);
        } else {
            displayResult('Please enter valid numbers');
        }
}

function performOperation3() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    let resultElement = document.getElementById('result');

    let result = findordertext( resultElement.textContent, num1, num2 );
    displayResult( result );

    // Check if inputs are valid numbers
    // if (!isNaN(resultElement.textContent)) {
    //     // Perform the operation
    //     let result = findordertext("1234");

    //     // Display the result
    //     displayResult("1234");
    //     } else {
    //         displayResult('Please enter valid numbers');
    //     }
}

function multiply(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // Multiply the numbers
    return a * b;
}


function findpossiblenumber(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // Find possible number
    // return a * b;

    string_text = "There is a cat in the box."
    result_string = "";
    // 8410410111410132105115329732999711632105110321161041013298111120
    // Function Y = mx + C ;
    
    for (i = 0; i + 1 < string_text.length; i = i + 1){
        // _temp = string_text.substring(i, i + 1);
        _temp = string_text.charCodeAt(i);

        // To perfrom cylindical encryption
        // Function Y = mx + C ;
        _target = (a * _temp) + b;
        // _target = _temp + b;
        // _target = _temp;
        if (_target.toString().length < 8) {

            for (j = 0; j < 8; j = j + 1){
                if (_target.length >= 8) {
                    break;
                }
                _target = "0" + _target;
            }
        }


        result_string = result_string + _target.toString();
    }

    return result_string;

}

function findordertext( text, num1, num2 ) {
    // Introduce a debugger statement to pause execution
    debugger;

    result_string = "";

    for (i = 0; i < text.length; i = i + 8){
        _temp = text.substring( i, i + 7 );


        // _temp = String.fromCharCode(Number(_temp));

        // To perfrom cylindical encryption
        // Function Y = mx + C ;
        
        _temp = parseInt( (_temp -  num2) / num1 );
        // _target = (_temp -  num2) / num1;
        // _target = _temp -  num2;
        // _target = parseInt( _target );
        _target = String.fromCharCode(Number(_temp));


        if (!isNaN(_temp)) {
            result_string = result_string + _target.toString();
        }


        // _target = (_temp -  num2) / num1;
        // _target = parseInt( _target );
        // _target = String.fromCharCode(Number(_temp));

        
    }

    return result_string;
}

function displayResult(result) {
    // Display the result in the paragraph element
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The result is: ${result}`;
}