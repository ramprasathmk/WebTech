"mouse event";


let myBtn = document.querySelectorAll(".no")[0];
console.log(myBtn);

let left = 50;
myBtn.addEventListener( () =>  {
    left += 5;
    myBtn.style.left = $`${left}`
});
