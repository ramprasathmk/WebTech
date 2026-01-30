# Hoisting

- Moving the declaration top of the respective scope is known as hoisting.

## Types of Hoisting in JavaScript

1. Variable Hoisting
2. Method Hoisting

## 1. Variable Hoisting

- **By using `var` keyword:**

  - The Declaration goes to top of the scope and the value initialized as `undefined` till actual initialization.
  - That's why if we try to access before actual initialization, we will get `undefined`.

    ```js
    console.log(a); // undefined
    var a = 20;
    ```

- **By using `let` and `const`:**

  - The Declaration goes to top of the scope and the value won't be assigned till actual initialization.
  - If we try to access before actual initialization, we will get `Reference Error` due to `TDZ()`.

    ```js
    console.log(a);
    let a = 20;

    console.log(b);
    const a = 20;
    ```

## 2. Functional Hoisting

- Moving the function at the top of the scope is known as Functional hoisting.
