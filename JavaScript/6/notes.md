# Types of Functions in JavaScript

## 1. Named Function

- A function having a name is called as named function.
- Syntax:

  ```js
  function abc(x, y) {
    return x * y;
  }

  abc(1, 2);
  ```

- Example:

  ```js
  // 1. Named Functions
  function sayHello() {
    console.log("Hi, from JavaScript");
  }
  ```

## 2. Anonymous Function

- The Function not having a name is known ad Anonymous Function.
- Syntax:

  ```js
  function () {
    // statements
  }
  ```

- Example:

  ```js
  // 2. Anonymous Function -> Unnamed Function
  const add = function (a, b) {
    return a + b;
  };
  ```

## 3. Function with Expression

- If we store a function inside a variable is called as Function with Expression.
- Syntax:

  ```js
  let a = function () {};
  ```

- Example:

  ```js
  // 3. Function with Expression
  let a = function anyName(a, b) {
    console.log(a, b);
  };

  let b = function (a, b) {
    console.log(a);
    console.log(b);
  };
  ```

## 4. IIFE Function

- `IIFE` -> **Immediately Invoke Function Expression**
- Immediately Invoked Function Expression.
- The function will be called immediately after the declaration.
- Syntax:

  ```js
  ()() ----> (function (){})()
  ```

- Example:

  ```js
  // 4. IIFE Function
  (function () {
    console.log("I am IIFE Function");
  })();
  ```

## 5. Arrow Function

- It is the only function which can be created without using function keyword.
- It is used to reduce the syntax.
- Syntax:

  ```js
  // 1. Way One
  (a, b) => {
    return a + b;
  };

  // 2. Way Two
  (a, b) => a + b;

  // 3. Way Three
  (a) => a * a;
  ```

- Example:

  ```js
  // 5. Arrow Function
  const Greetings = (msg) => {
    console.log("Message: ", msg);
  };

  Greetings("I am Arrow Function");
  ```
