"use strict";
// var a = 10;

// console.log(a);

// var a = 100;

// console.log(a);

// let b = 50;

// console.log(b);

// let b = 500;

// console.log(b);

// const c = 39;

// console.log(c);

// const c = 8888;

// console.log(c);

// /*******************************************************/
// /******************* Re-initialization *****************/
// /*******************************************************/

// // Re initialization allowed
// var x;
// let y;
// console.log(x);
// console.log(y);

// x = 20;
// y = 30;

// console.log(x);
// console.log(y);

// // Declaration and initialization is allowed
// // Re initialization not allowed
// const z; // error

// const z = 3.14;

// console.log(z);

var i = 10;
let j = 200;
const k = 3000;
console.log(i, j, k);

{
  var i = 50;
  let j = 1010;
  console.log(i, j, k);
}

function abc() {
  let j = 300;
  console.log(i, j, k);
}

abc();


function def() {
  var a = 10;
  let b = 20;
  const c = 90;

  console.log(a, b, c);
}

(() => {
  console.log("hello")
})()
