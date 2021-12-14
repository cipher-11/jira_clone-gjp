var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");
var btn4 = document.querySelector("#btn4");
var reset = document.querySelector("#btn5");

var col = ["red", "green", "yellow", "teal"]
var circle = document.querySelectorAll(".circle ");
for (var i = 0; i < 100; i++) {
    circle[i].style.background = (col[Math.floor(Math.random() * 4)]);
}

function red() {
    for (var i = 0; i < 100; i++) {
        if (circle[i].style.background != "red") {
            circle[i].style.visibility = "hidden";
        }
        if (circle[i].style.background == "red") {
            circle[i].style.visibility = "visible";
        }
    }

}

function teal() {
    for (var i = 0; i < 100; i++) {
        if (circle[i].style.background != "teal") {
            circle[i].style.visibility = "hidden";
        }
        if (circle[i].style.background == "teal") {
            circle[i].style.visibility = "visible";
        }
    }

}

function green() {
    for (var i = 0; i < 100; i++) {
        if (circle[i].style.background != "green") {
            circle[i].style.visibility = "hidden";
        }
        if (circle[i].style.background == "green") {
            circle[i].style.visibility = "visible";
        }
    }

}

function yellow() {
    for (var i = 0; i < 100; i++) {
        if (circle[i].style.background != "yellow") {
            circle[i].style.visibility = "hidden";
        }
        if (circle[i].style.background == "yellow") {
            circle[i].style.visibility = "visible";
        }
    }

}

function white() {
    for (var i = 0; i < 100; i++) {

        circle[i].style.visibility = "visible"

    }

}
btn1.addEventListener("click", red);
btn2.addEventListener("click", teal);
btn3.addEventListener("click", green);
btn4.addEventListener("click", yellow);
btn5.addEventListener("click", white);