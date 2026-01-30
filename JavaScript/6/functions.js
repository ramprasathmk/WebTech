// 1. Named Functions
function showWelcome() {
    console.log("Hi, from JavaScript")
}

showWelcome();

// 2. Anonymous Function -> Unnamed Function
const Greet = function (message) { 
    console.log("Message: ", message)
}

Greet("Happy Christmas");

// 3. Function with Expression
let add = function anyName(a, b) {
    console.log("Sum = ", a + b)
}

// anyName(10, 20)

add(1, 2);

let product = function (a, b) {
    console.log(a)
    console.log(b)
    console.log(a * b)
}

product(10, 20);

// 4. IIFE -> Immediately Invoke Function Expression
(function () {
    console.log("I am IIFE Function")
})();


// 5. Arrow Function
let Greetings = (user) => { 
    if (user === undefined || user === "") {
        user = "Admin"
    }
    console.log(`Welcome Home, ${user}`)
}

Greetings()
