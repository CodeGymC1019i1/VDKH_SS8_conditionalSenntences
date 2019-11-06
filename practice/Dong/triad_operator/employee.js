function checkUser() {
    let message;
    let userName = prompt('nhập user name');
    message = (userName === 'Employee') ? 'Hello' : (userName === 'Director') ? 'Greetings' : (userName === '') ? 'No login' : ' ';
    alert(message);
}