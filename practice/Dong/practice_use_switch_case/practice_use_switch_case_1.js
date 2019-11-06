function checkBrowser() {
    let browser = prompt('nhập vào loại trình duyệt bạn dùng');
    switch (browser) {
        case 'Edge':
            alert("You've got the Edge!");
            break;
        case 'Chrome':
        case 'Firefox':
        case 'Safari':
        case 'Opera':
            alert('Okay we support these browsers too');
            break;
        default:
            alert('We hope that this page looks ok!');
    }
}

