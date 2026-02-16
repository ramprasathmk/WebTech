# Text Properties

## Modifying Text

There are three ways to modify a text

1. `innerHTML` - we can modify text space event tags includes the element.

2. `textContent` - we can modify text and space.

3. `innerText` - we can modify only text in the element.

## Modifying Attributes

We can modify any elements attributes by targeting the element and provide name attribute.

## Events

We can add events to elements in 3 ways.

1. `addEventListener`: it will accept 3 args event type, eventHandler and capturing value.

    ```js
    myinput.addEventListener("click", () => {...}, true);
    ```

2. `Event as property`: we can directly event by using property.

    ```js
    myInput.onkeyup() => {...}
    myInput.onclick() => {...}
    ```

3. `HTML attribute`: here we can provide events as attribute to html elements.

    - **JavaScript**

        ```js
        function buttonEventFunc() {...}
        ```

    - **HTML**

        ```html
        <button onclick="buttonEventFunc()"> Click Here! </button>
        ```
