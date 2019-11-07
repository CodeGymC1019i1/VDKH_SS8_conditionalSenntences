function clickYes() {
    alert("Love you");
}
function overNo() {
    window.innerHeight = 500;
    window.innerWidth  = 500;
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    document.getElementById('No').style.left = x + 'px';
    document.getElementById('No').style.top = y + 'px';
}