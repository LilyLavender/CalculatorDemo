$('#button-add').on('click', function() {
    doMath("add");
});

$('#button-subtract').on('click', function() {
    doMath("subtract");
});

$('#button-multiply').on('click', function() {
    doMath("multiply");
});

$('#button-divide').on('click', function() {
    doMath("divide");
});

function doMath(operation) {
    let num1 = parseInt($('#number-input-1').val());
    let num2 = parseInt($('#number-input-2').val());
    let output;

    if (operation == "add") {
        output = num1 + num2;
    }
    if (operation == "subtract") {
        output = num1 - num2;
    }
    if (operation == "multiply") {
        output = num1 * num2;
    }
    if (operation == "divide") {
        output = num1 / num2;
    }

    $('#output').text("The result is: " + output);
}