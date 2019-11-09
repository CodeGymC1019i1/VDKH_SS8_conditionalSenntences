function changeImg1() {
    let img_1 = document.getElementById('img_1');
    if (img_1.src.match('images/girl1_1.png')) {
        img_1.src = 'images/girl2_1.png';
    } else if (img_1.src.match('images/girl2_1.png')) {
        img_1.src = 'images/girl3_1.png';
    } else if (img_1.src.match('images/girl3_1.png')) {
        img_1.src = 'images/girl4_1.png';
    } else {
        img_1.src = 'images/girl1_1.png';
    }
    compareSrc();
}

function changeImg2() {
    let img_2 = document.getElementById('img_2');
    if (img_2.src.match('images/girl4_2.png')) {
        img_2.src = 'images/girl3_2.png';
    } else if (img_2.src.match('images/girl3_2.png')) {
        img_2.src = 'images/girl2_2.png';
    } else if (img_2.src.match('images/girl2_2.png')) {
        img_2.src = 'images/girl1_2.png';
    } else {
        img_2.src = 'images/girl4_2.png';
    }
    compareSrc();
}

function changeImg3() {
    let img_3 = document.getElementById('img_3');
    if (img_3.src.match('images/girl2_3.png')) {
        img_3.src = 'images/girl3_3.png';
    } else if (img_3.src.match('images/girl3_3.png')) {
        img_3.src = 'images/girl4_3.png';
    } else if (img_3.src.match('images/girl4_3.png')) {
        img_3.src = 'images/girl1_3.png';
    } else {
        img_3.src = 'images/girl2_3.png';
    }
    compareSrc();
}

function changeImg4() {
    let img_4 = document.getElementById('img_4');
    if (img_4.src.match('images/girl3_4.png')) {
        img_4.src = 'images/girl4_4.png';
    } else if (img_4.src.match('images/girl4_4.png')) {
        img_4.src = 'images/girl2_4.png';
    } else if (img_4.src.match('images/girl2_4.png')) {
        img_4.src = 'images/girl1_4.png';
    } else {
        img_4.src = 'images/girl3_4.png';
    }
    compareSrc();
}

function compareSrc() {
    let img_1 = document.getElementById('img_1');
    let img_2 = document.getElementById('img_2');
    let img_3 = document.getElementById('img_3');
    let img_4 = document.getElementById('img_4');
    let a = img_1.src.substr(0, img_1.src.length - 6);
    let b = img_2.src.substr(0, img_2.src.length - 6);
    let c = img_3.src.substr(0, img_3.src.length - 6);
    let d = img_4.src.substr(0, img_4.src.length - 6);
    if (a === b && a === c && a === d) {
        alert('done');
    }
}