let input = document.querySelectorAll("input")[0];
let button = document.querySelectorAll("button")[0];
let p = document.querySelectorAll("p")[0];

let count = 0
function show(){
    console.log("I'am from js...!"+count++);
    

}


// key board events : keydown, keyup, keypress

input = addEventListener("keydown",()=>{
    show();
})
