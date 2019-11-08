
//get input value...
function getValueInput() {
    let valueInput = document.getElementById("input").value;
    console.log("valueInput==>", valueInput);
}

//insert value press
function insert(num) {
    // alert(123);
    document.form.textview.value = document.form.textview.value + num;
}


//equal caculator
function equal() {
    var result = document.form.textview.value;
    console.log("result==>", result);

    if (result) {
        document.form.textview.value = eval(result);
    }
}

//function reset form caculator
function reset() {
    document.form.textview.value = "";
}

//function delete character
function back() {
    var result = document.form.textview.value;
    document.form.textview.value = result.substring(0, result.length - 1);
}

function closeApp() {
    confirm("Bạn có muốn thoát ứng dụng");
}
