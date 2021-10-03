const MyName ="Nursultan";
let age = 22; 

const header =document.querySelector("#header");
const navLinks =document.querySelectorAll(".nav__link");

console.log(navLinks);

function sayHello() {
    let message ="Hello Micky Mouse " + MyName;
    console.log(message); 
}
 
sayHello();

function simpleMath(a, b) {
     let result = a + b;
     return result;
}

let sum =  simpleMath(11, 382);

console.log(sum);


window.addEventListener("scroll", function(){
    console.log("scrolled")
});