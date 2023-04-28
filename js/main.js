let header = document.getElementById("header");
let logo = document.getElementById("logo");
let scrollBTN = document.getElementById("scrollBTN");

function Trasnition() {
    scrollBTN.style.bottom = "5%";
}

onscroll = function() {
    if (scrollY >= 1000) {
        header.style.backgroundColor = "var(--primary-color)";
        logo.style.color = "#FFF";
    }
    else {
        header.style.backgroundColor = "transparent";
        logo.style.color = "var(--primary-color)";
    }

    if (scrollY >= 400) {
        scrollBTN.style.display = "block";
        setTimeout(Trasnition, 300);
    }
    else {
        scrollBTN.style.bottom = "-50%";
    }
}

scrollBTN.onclick = function() {
    scroll(0, 0);
}