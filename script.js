// When addition button is clicked
$('#button-add').on('click', function() {
    // Call doMath function with "add" argument
    doMath("add");
});

// When subtrction button is clicked
$('#button-subtract').on('click', function() {
    // Call doMath function with "subtract" argument
    doMath("subtract");
});

// When multiplication button is clicked
$('#button-multiply').on('click', function() {
    // Call doMath function with "multiply" argument
    doMath("multiply");
});

// When division button is clicked
$('#button-divide').on('click', function() {
    // Call doMath function with "divide" argument
    doMath("divide");
});

// doMath function
function doMath(operation) {
    // Get value from input elements
    let num1 = parseInt($('#number-input-1').val());
    let num2 = parseInt($('#number-input-2').val());
    // Declare output var
    let output;

    // If parameter is add
    if (operation == "add") {
        // Set output to number1 + number2
        output = num1 + num2;
    }
    // If parameter is subtract
    if (operation == "subtract") {
        // Set output to number1 - number2
        output = num1 - num2;
    }
    // If parameter is multiply
    if (operation == "multiply") {
        // Set output to number1 x number2
        output = num1 * num2;
    }
    // If parameter is divide
    if (operation == "divide") {
        // Set output to number1 ➗ number2
        output = num1 / num2;
    }

    // Set text in output p to the output variable
    $('#output').text("The result is: " + output);
}