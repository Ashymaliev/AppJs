const MyName ="Nursultan";
let age = 22; 

const header =document.querySelector("#header");
const navLinks =document.querySelectorAll(".nav__link");
const testBtn =document.querySelector('#testBtn');

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


window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;

    if(scrollPos > 0) {
        header.classList.add('red')

    } else {
        header.classList.remove('red')
    }
});


testBtn.addEventListener("click", function(){
   

});



for(let navItem of navLinks){
    navItem.addEventListener("click", function(){
       console.log(navItem.text);
    });

}