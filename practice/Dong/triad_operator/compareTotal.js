function compareTotal() {
    let number_a = parseFloat(prompt('nhập vào số a'));
    let number_b = parseFloat(prompt('nhập vào số b'));
    let total = (number_a + number_b < 4) ? 'below' : 'over';
    alert(total);
    // if(total < 4){
    //     alert('below');
    // }
    // else {
    //     alert('over');
    // }
}