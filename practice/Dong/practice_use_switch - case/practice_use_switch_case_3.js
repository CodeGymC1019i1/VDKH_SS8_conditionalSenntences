function compareNumber() {
    let value = prompt('Type a number', '0');
    let result;
    // if (value > 0) {
    //     alert(1);
    // } else if (value < 0) {
    //     alert(-1);
    // } else {
    //     alert(0);
    // }
    if (value > 0) {
        result = 1;
    } else if (value < 0) {
        result = 2;
    } else {
        result = 3;
    }
    switch (result) {
        case 1:
            alert('1');
            break;
        case 2:
            alert('-1');
            break;
        case 3:
            alert('0');
            break;
    }
}
