'Being alive is not a crime';

// let inputTag = document.querySelectorAll("input")[0];

// console.log(inputTag);
// console.log(inputTag.placeholder);
// console.log(inputTag.isConnected);
// console.log(inputTag.type);
// console.log(inputTag.name);


let imageTag = document.getElementsByTagName("img")[0];
let h1 = document.getElementsByTagName("h1")[0];

// console.log(imageTag);
// console.log(imageTag.src="../asserts/img3.jpg");
// console.log(imageTag.isConnected);
// console.log(imageTag.loading);
// console.log(imageTag.alt);

let imagePath = [
    "../asserts/img1.jpg",
    "../asserts/img2.jpg",
    "../asserts/img3.jpg",
    "../asserts/img4.jpg",
    "../asserts/img5.jpg",
    "../asserts/img6.png",
    "../asserts/img7.png",
];

let imageAlt = ["turtle", "squrril", "medows", "garden", "Cliff", "Water falls", "Gojo wall street"];


let i=0;
setInterval( () => {
    if (i==7) i=0;
    imageTag.alt = imageAlt[i].toLowerCase();
    h1.innerText = imageAlt[i].toUpperCase();
    imageTag.src = imagePath[i++];
;}, 900);
