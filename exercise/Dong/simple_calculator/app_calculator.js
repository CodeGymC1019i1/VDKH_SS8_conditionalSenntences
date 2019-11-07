function insertValueOfDisplay(x) {
    eval('display').value += x;
}

function calc() {
    let display = document.getElementById('display');
    display.value = eval(display.value);
}

function sqrNumber() {
    let display = document.getElementById('display');
    let result = eval(display.value);
    result = Math.pow(result, 2);
    display.value = result;
}

function sqrtNumber() {
    let display = document.getElementById('display');
    let result = eval(display.value);
    result = Math.sqrt(result);
    display.value = result;
}
function delString() {
    let display = document.getElementById('display').value;
     // display = display.substr(0, display.length-1);
    document.getElementById('display').value= display.substr(0, display.length-1);
}