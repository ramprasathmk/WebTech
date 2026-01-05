

### Variables

| SNO | var | let | const |
|---|---|---|---|
| 1 | Redeclaration is possible. | Redeclaration is not possible | not possible |
| 2 | Reinitialization is possible | Reinitialization is possible | not possible |
| 3 | while declaring initialization is not compulsory | while declaring initialization is not compulsory | while declaring initialization is compulsory |
| 4 | var will not follow block scope | follows all the three scopes | follows all the three scopes |

### Scope of variable 
1. Global Scope 
2. Block Scope 
3. Function Scope or Local Scope 


### Example 
```js
index.js
// Global Scope
var a = 10;

console.log("This is a global scope");

// Block Scope
{
    let b = 50;

    console.log("This is block scope")
}

// Function Scope
function abc() {
    let c = 10;
    console.log("This is function scope");
    // local area
}

abc();
```

```bash
node index.js
```

