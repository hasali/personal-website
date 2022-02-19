
const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.nav-bar');
const navItems = document.querySelectorAll('.nav-item');
const lidWrapper = document.querySelectorAll(".lid-wrapper");
const lid = document.querySelectorAll(".lid");
const sleeveItem = document.querySelectorAll(".sleeve-item");
const landingPage = document.querySelector(".landing-page-wrapper");
var isMenuOpen = false;


menuBtn.style.display = "none";

window.addEventListener("scroll", () => {
    if (window.scrollY > landingPage.scrollHeight) {
        menuBtn.style.display = "block"
    } else {
        if(isMenuOpen){
            isMenuOpen =false;
            menuEvent();
        }
        menuBtn.style.display = "none";
    }
    console.log(isMenuOpen);
})






menuBtn.addEventListener('click', () => {
    console.log('hello from menubtn');
    isMenuOpen = !isMenuOpen;
    menuEvent();
    
});

function menuEvent(){
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
    menuNav.classList.toggle('open');
    navItems.forEach(item => item.classList.toggle('open'));
};

for (var i = 0; i < lidWrapper.length; i++) {
    (function (i) {
        lidWrapper[i].addEventListener('click', function () {
            lid[i].classList.toggle("slide");
            sleeveItem[i].classList.toggle("slide");
        });
    })(i);
}
