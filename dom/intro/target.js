'';

console.log("DOM Intro", window);

let allHeading = document.getElementsByTagName("h1");
let allAnchor = document.getElementsByTagName("a");
let allButton = document.getElementsByTagName("button");

console.log(allHeading[1]);
console.log(allAnchor[0]);
console.log(allButton[1]);

let allClass = document.getElementsByClassName("anyname");
console.log(allClass);
console.log(allClass[0]);
console.log(allClass[1]);
console.log(allClass[2]);


let allClass2 = document.getElementsByClassName("cls2");
console.log(allClass2);
console.log(allClass2[0]);
console.log(allClass2[1]);
console.log(allClass2[2]);

// ! Here we are using querySelectorAll.
// ! If the value is class then: --> ".className"
// ! If the value is id then   : --> "#idName"
let allCSS = document.querySelectorAll(".all");
console.log(allCSS);

