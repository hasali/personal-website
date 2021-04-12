
const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.nav-bar');

const lidWrapper = document.querySelectorAll(".lid-wrapper");
const lid = document.querySelectorAll(".lid");
const sleeveItem = document.querySelectorAll(".sleeve-item");


 
menuBtn.addEventListener('click', ()=>{
    console.log('hello from menubtn');
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
    menuNav.classList.toggle('open');
});


for(var i = 0; i < lidWrapper.length; i++){
    (function(i){
        lidWrapper[i].addEventListener('click', function(){  
            lid[i].classList.toggle("slide");     
            sleeveItem[i].classList.toggle("slide");
        });
    })(i);    
}
