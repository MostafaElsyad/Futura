let navBTN = document.getElementById('navBTN');
let sideTAB = document.getElementById('sideTAB');
let blurr = document.getElementById('blur');
let turn = 0;

navBTN.onclick = function slideTAB() {
    sideTAB.style.transform = "translateX(0)";
    turn = 1;

    turnBlur();
}

blurr.onclick = function() {
    sideTAB.style.transform = "translateX(100%)";
    turn = 0;

    turnBlur();
}

function turnBlur() {
    if (turn === 1) {
        blurr.style.display = 'flex';
    }else {
        blurr.style.display = 'none';
    }
}