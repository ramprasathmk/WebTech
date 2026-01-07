# Variable Hoisting in JavaScript DataTypes

## Variable Hoisting

- If we have declared any variable by using `var` keyword and we are trying to access it before declaration.
- The output will be `undefined`.
- Because the declaration part will moving to the top.
- This is called variable hoisting.
- Example:

  ```js
  // Variable Hoisting

  console.log(a); // undefined
  var a = 20;
  ```

## What is the Difference Between `==` and `===`?

- `==` check only the value.
- `===` check the value with datatype.
- Example:
  
  ```js
  // == and === difference
  console.log("20" == 20);  // true
  console.log("20" === 20); // false
  ```
