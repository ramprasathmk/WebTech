# Datatypes in JavaScript

- It is used to define which kind of data is stored in the variable.
- There are two types of Datatypes

## Types of Data Types in JavaScript

**1. Primitive**

- number
- boolean
- string
- undefined
- null
- bigint

**2. Non Primitive**

- Array
- Object
- Function / Method

## 1. Primitive

- **number**

  - `number`

    - We can store decimal as well as non-decimal numbers.
    - **NOTE:** typeof operator is used to know the data of any variable.
    - example:

      ```js
      let num1 = 50;
      console.log(num1); // 50

      let num2 = 50.3;
      console.log(num2); // 50.3

      // To know which kind of data we are using
      console.log(typeof num1, num1); // number 50

      console.log(typeof num2, num2); // number 50.3
      ```

  - `Number.parseInt()`

    - It is used to convert anything to integer value
    - example:

      ```js
      let num4 = Number.parseInt(40.7);

      let num5 = Number.parseInt("50");

      let num6 = Number.parseInt("abc");

      let num7 = Number.parseInt("60abc");

      let num8 = "70";

      console.log(num8); // 70

      console.log(typeof num4, num4); // number 40

      console.log(typeof num5, num5); // number 40

      console.log(typeof num6, num6); // number Nan

      console.log(typeof num7, num7); // number 60

      console.log(typeof num8, num8); // string 70

      console.log(typeof Number.parseInt(num8), Number.parseInt(num8)); //number 70
      ```

- **boolean**

  - It can take true or false
  - example:

    ```js
    let isPlayer = true;

    console.log(isPlayer); // true

    console.log(!isPlayer); // false
    ```

- **string**

  - It is combination of single or multiple characters, we can enclose string by **""** or **''** or **``**
  - example:

    ```js
    // we can declare and initialize strings in three ways.

    // 1. Double Quotes
    let playerName = "Santhosh";

    // 2. single Quotes
    let playerName2 = "Ravichandran";

    // 3. Template String
    let player = `Java`;

    console.log(playerName);

    console.log(playerName2);

    console.log(player);

    // There is no difference between "" and ''.
    console.log(typeof playerName, playerName);

    console.log(typeof playerName2, playerName2);

    console.log(typeof player, player);
    ```

- **undefined**

  - variable declared but not intialized is called undefined.
  - typeof undefined is undefined.
  - example:

    ```js
    // undefined means declared a variable and not intialized.
    let scoreBoard;

    console.log(typeof scoreBoard, scoreBoard); // undefined -> undefined
    ```

- **null**

  - It is used to store as nothing in variable.
  - example:

    ```js
    // The null means declared a variable and initialized a value with null in feature you can intialize.
    let score = null;

    console.log(score);

    console.log(typeof score, score); // object -> null
    ```

  - **bigint**

    - It is used to store big integer value in any variable.
    - bigint number suffix will be n.
    - example:

    ```js
    let num3 = BigInt(2);

    console.log(num3);

    console.log(typeof num3, num3); // bigint -> 2n
    ```

## 2. Non Primitive

1. Array
2. Object
3. Function / Method
