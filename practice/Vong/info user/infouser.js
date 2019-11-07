function checkUserName() {
    let userName = prompt('Input user name');
    if (userName === 'admin') {
        let password = prompt('Input password')
        {
            if (password === 'Vong') {
                alert('Welcome');
            } else if (password === null) {
                alert('Canceled');
            } else {
                alert('Wrong password');
            }
        }
    } else if (userName === null) {
        alert('Canceled');
    } else {
        alert(" 'I don't know you ");
    }
}