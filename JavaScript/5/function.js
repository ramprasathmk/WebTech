// Greetings Function greets the user
function Greetings() {
  console.log("Greetings from JavaScript");
}

// Function with params
function add(a, b) {
  console.log("a=" + a);
  console.log("b=" + b);
  console.log("Sum = " + (a + b));
}

// TODO: Try Out: create a multiplication function with three params
function multiply(a, b, c) {
  console.log("a=" + a);
  console.log("b=" + b);
  console.log("c=" + c);
  // output
  console.log(a * b * c);
  console.log();
}

function abc() {
  console.log("hello");
  return 50;
}

/// entire function and function will not be executed
let result1 = abc;
console.log(result1);

///
let result2 = abc(); //
console.log(result2);

function main() {
  add(10, 20);

  console.log();

  multiply();
  multiply(1);
  multiply(1, 2);
  multiply(1, 3, 4);
}

main();
