let theme = document.getElementById("theme");
if (localStorage.getItem("color") === null) {
    localStorage.setItem("color", "#3dcfd3");
    theme.value = "#3dcfd3";
    document.documentElement.style.setProperty("--main", "#3dcfd3");
}
document.documentElement.style.setProperty(
    "--main",
    localStorage.getItem("color")
);
theme.value = localStorage.getItem("color");

theme.onblur = function () {
    localStorage.setItem("color", theme.value);
    document.documentElement.style.setProperty(
        "--main",
        localStorage.getItem("color")
    );
    theme.value = localStorage.getItem("color");
};

let defult = document.getElementById("defult");
defult.onclick = function () {
    localStorage.setItem("color", "#3dcfd3");
    theme.value = "#3dcfd3";
    document.documentElement.style.setProperty("--main", "#3dcfd3");
};

let eCards = document.getElementsByClassName("c");
let ref = document.getElementsByClassName("flip-card");
let freeLance = document.querySelector(".freelance")
window.onscroll = function () {
    if (window.scrollY >= 1000) {
        for (i = 0; i < eCards.length; i++) {
            eCards[i].classList.add("slideLeft");
        }
    } else {
        for (i = 0; i < eCards.length; i++) {
            eCards[i].classList.remove("slideLeft");
        }
    }
    if (window.scrollY >= 1800) {
        freeLance.classList.add("slide")
    } else {
        freeLance.classList.remove("slide");
    }
    if (window.scrollY >= 3800) {
        for (i = 0; i < ref.length; i++) {
            ref[i].classList.add("slideUp");
        }
    } else {
        for (i = 0; i < ref.length; i++) {
            ref[i].classList.remove("slideUp");
        }
    }
};
