function upArrowPress() {
    let element = document.getElementById('img');
    element.style.top = parseFloat(element.style.top) - 100 + 'px';
}

function downArrowPress() {
    let element = document.getElementById('img');
    element.style.top = parseFloat(element.style.top) + 100 + 'px';
}

function leftArrowPress() {
    let element = document.getElementById('img');
    element.style.left = parseFloat(element.style.left) - 100 + 'px';
}

function rightArrowPress() {
    let element = document.getElementById('img');
    element.style.left = parseFloat(element.style.left) + 100 + 'px';
}

function moveSelect(evt) {
    console.log(evt.key);
    switch (evt.keyCode) {
        case 37:
            leftArrowPress();
            break;
        case 38:
            upArrowPress();
            break;
        case 39:
            rightArrowPress();
            break;
        case 40:
            downArrowPress();
            break;
    }
}

function docReady() {
    window.addEventListener('keyup', moveSelect);
}