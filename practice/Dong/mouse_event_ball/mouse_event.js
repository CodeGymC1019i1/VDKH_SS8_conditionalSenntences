imgObject = null;
// imgObject = document.getElementById('ball');
function init() {
    let imgObject = document.getElementById('ball');
    imgObject.style.position = 'relative' ;
    imgObject.style.left = '0px';
}
function moveRight() {
    let imgObject = document.getElementById('ball');
    imgObject.style.left = parseInt(imgObject.style.left) + 10 + 'px';
}
window.onload = init;
