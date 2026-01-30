// Create a subtration arrow function

const sub = (a, b) => {
  return a - b;
};

let result1 = sub(10, 5);
let result2 = sub(12, 11);
let result3 = sub(20, 10);
let result4 = sub(100, 25);

console.log("Result: ", result1);
console.log("Result: ", result2);
console.log("Result: ", result3);
console.log("Result: ", result4);

// Create a arrow function to swap two numbers
const swap = (a, b) => {
  console.log("Before Swap", a, b);
  a = a + b;
  b = a - b;
  a = a - b;
  return [a, b];
};

let res1 = swap(10, 5);
let res2 = swap(12, 11);
let res3 = swap(20, 10);
let res4 = swap(100, 25);

console.log("Result: ", res1);
console.log("Result: ", res2);
console.log("Result: ", res3);
console.log("Result: ", res4);

// Create arrow function to multiply two numbers
const multiply = (a, b) => a * b;

console.log("Result:", multiply(10, 20));
console.log("Result:", multiply(30, 50));
console.log("Result:", multiply(12, 21));

// Create arrow function with only one param

const cube = (a) => a * a * a;

console.log(cube(2));
console.log(cube(30));
console.log(cube(9));
