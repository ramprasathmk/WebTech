let myInput = document.querySelectorAll("input")[0];
let submitButton = document.querySelectorAll("button")[0];
let resetButton = document.querySelectorAll("button")[1];

submitButton.textContent = "Submit";
resetButton.textContent = "Reset";


submitButton.addEventListener("click", () => {
    console.log("I am from submit button");
});


resetButton.addEventListener("click", () => {
    console.log("Im from reset button");
});


myInput.addEventListener("keypress", () => {
    console.log("I am from input", myInput.value);
});


window.addEventListener("load", () => {
    console.log("Im from load.");
});


window.addEventListener("resize", () => {
    console.log("Im from resize.");
    console.log(window.innerHeight, window.innerWidth);
});

window.addEventListener("scroll", () => {
    console.log("I am from scroll");
});
