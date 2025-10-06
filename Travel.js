let searchBtn=document.querySelector('#search-btn');
let searchForm=document.querySelector('.search-form');
let loginForm=document.querySelector('.login-form');
let menuBar=document.querySelector('#menu-bar');
let navBar=document.querySelector('.navbar');
let viBtn=document.querySelectorAll(".video-btn");

// show in button Search
function showsearch(){
    searchBtn.classList.toggle("fa-times");
    searchForm.classList.toggle("active");
}
//  show in Form
function showForm(){
loginForm.classList.toggle("active");
}
// hiden in form
function hideform(){
    loginForm.classList.remove("active");
}

// Show Menu in width page Less Than 1000
function showMenu(){
menuBar.classList.toggle("fa-times");
navBar.classList.toggle("active");
}
// slider in hero
viBtn.forEach(slide=>{
    slide.addEventListener("click",function()
    {
        document.querySelector(".controls .blue").classList.remove("blue");
        slide.classList.add("blue");
        let src=slide.getAttribute("data-src");
        document.querySelector("#video-slider").src =src;
    });
});
// slider review
var swiper = new Swiper(".review-slider", {
    spaceBetween :20,
    loop:true,
    autoplay:{
        delay:2500
    },
    breakpoints:{
        640:{
            slidesPerView:1
        },
        768:{
            slidesPerView:2
        },
        1024:{
            slidesPerView:3
        }
    }
});