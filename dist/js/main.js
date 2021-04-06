
const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.nav-bar');

const lidWrapper = document.querySelectorAll(".lid-wrapper");
const lid = document.querySelector(".lid");
const sleeveItem = document.querySelectorAll(".sleeve-item");

let showMenu = true;
let showSleeveItem = true;
 
menuBtn.addEventListener('click', toggleMenu());


for(var i = 0; i < lidWrapper.length; i++){
    (function(i){
        lidWrapper[i].addEventListener('click', function(){       
            document.getElementsByClassName('sleeve-item')[i].classList.toggle("slide");
        });
    })(i);
    
    
}
function toggleLid(){
    
    
    for (var i=0; i<sleeveItem.length;i++){
        
            sleeveItem[i].classList.toggle("slide");
        
        console.log('hello');
            
    }
}
function toggleMenu(){
    
        hamburger.classList.toggle('open');
        nav.classList.toggle('open');
        menuNav.classList.toggle('open');
        //showMenu = true;
    
    // }else{
    //     hamburger.classList.remove('open');
    //     nav.classList.remove('open');
    //     menuNav.classList.remove('open');
    //     showMenu = false;
    // }
}
