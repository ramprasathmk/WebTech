// This Prints the message after the timeout delay.
// setTimeout( () => {
//     console.log("This is a message");
// }, 5000);


// This prints the message for every time delay until the intruption occured.
// let count=0;
// let interval = setInterval( () => {
//     console.log(count++, ": Ready to Play the Game!");
//     if (count === 5) {
//         clearInterval(interval);
//     }
// }, 2000);


// let query = document.querySelectorAll("div")[0];

// console.log(query.innerHTML);
// console.log(query.textContent);
// console.log(query.innerText);
// console.log();


let myh1 = document.querySelectorAll("h1")[0];
myh1.innerHTML = "Bigil";

console.log(myh1);
console.log(myh1.innerText);

// Practice Code 
let myh2 = document.querySelectorAll("h1")[1];
myh2.innerText = "Beast";

console.log(myh2);
console.log(myh2.innerText);

