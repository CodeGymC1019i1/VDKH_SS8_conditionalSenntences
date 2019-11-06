function checkUserName() {
    let userName = prompt('input user name');
    if (userName === 'admin') {
        let password = prompt('input password')
        {
            if (password === 'TheMaster') {
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