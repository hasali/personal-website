
const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const menuNav =document.querySelector('.nav-bar');
console.log(menuBtn);
console.log(hamburger);
console.log(nav);
console.log(menuNav);

let showMenu = false;


    
menuBtn.addEventListener('click', toggleMenu());
function toggleMenu(){
    if(!showMenu){
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        showMenu =true;

    }else{
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        showMenu = false;
    }
}
