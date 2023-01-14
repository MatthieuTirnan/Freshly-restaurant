$(document).ready(function() {
    
    $(".slider").slick({
        slidesToShow : 1,
        slidesToScroll : 1,
        autoplay : true,
        autoplaySpeed : 3500,
        pauseOnHover : true,
        dots : true
    }) 
    
    
});

window.addEventListener("DOMContentLoaded", function() {

    let btnall = document.querySelector(".btnall");
    let btnmeat = document.querySelector(".btnmeat");
    let btnfish = document.querySelector(".btnfish");
    let btnvegan = document.querySelector(".btnvegan");
    
    
    /*
    btnall.addEventListener("click", function() {
        let dish = document.getElementsByClassName("dish");
        for(let i of dish) {
            i.classList.remove("hidden");
        }
    });
    
    btnmeat.addEventListener("click", function() {
        let dish = document.getElementsByClassName("dish");
        for(let i of dish) {
            i.classList.add("hidden");
        }
        let meat = document.getElementsByClassName("meat");
        for(let i of meat) {
            i.classList.remove("hidden");
        }
    });
    
    btnfish.addEventListener("click", function() {
        let dish = document.getElementsByClassName("dish");
        for(let i of dish) {
            i.classList.add("hidden");
        }
        let fish = document.getElementsByClassName("fish");
        for(let i of fish) {
            i.classList.remove("hidden");
        }
    });
    
    btnvegan.addEventListener("click", function() {
        let dish = document.getElementsByClassName("dish");
        for(let i of dish) {
            i.classList.add("hidden");
        }
        let vegan = document.getElementsByClassName("vegan");
        for(let i of vegan) {
            i.classList.remove("hidden");
        }
    });
   */

   // DRY : Don't Repeat Yourself
    btnall.addEventListener("click", function() { displayAll(true); });
    btnmeat.addEventListener("click", () => { switchMenu("meat") });
    btnfish.addEventListener("click", function() { switchMenu("fish"); });
    btnvegan.addEventListener("click", function() { switchMenu("vegan"); });

});


// FUNCTIONS

function displayAll(display=false) {
    let dish = document.getElementsByClassName("dish");
    for(let i of dish) {
        i.classList.toggle("hidden", !display);
    }
}

function showClass(classe) {
    let classList = document.getElementsByClassName(classe);
        for(let i of classList) {
            i.classList.remove("hidden");
        }
}

function switchMenu(classe) {
    displayAll();
    showClass(classe);
}
