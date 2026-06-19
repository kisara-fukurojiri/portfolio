const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".header-nav");

hamburger.addEventListener("click", function(){
    nav.classList.toggle("active");
    hamburger.classList.toggle("active");
});

const images = document.querySelectorAll(".fv-images img");
let current = 0;
images[current].classList.add("active");
setInterval(() => {
    images[current].classList.remove("active");
    current++;
    if(current >= images.length){
        current = 0;
    }
    images[current].classList.add("active");
},4000);


// ==========================
// スクロールアニメーション
// ==========================
const fadeElements = document.querySelectorAll(".fade-up");
function fadeIn() {
    fadeElements.forEach((element) => {
        const position = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if(position < windowHeight - 100) {
            element.classList.add("show");
        }
    });
}
window.addEventListener("scroll", fadeIn);
window.addEventListener("load", fadeIn);

// ==========================
// TOPボタン表示
// ==========================

const pageTop = document.querySelector(".page-top");
window.addEventListener("scroll", () => {
    if(window.scrollY > 500){
        pageTop.classList.add("show");
    }else{
        pageTop.classList.remove("show");
    }
});
// ==========================
// INFOページの大画面へ表示
// ==========================
const mainImage = document.getElementById("mainImage");
const thumbnails = document.querySelectorAll(".gallery-thumb");

thumbnails.forEach((thumb) => {
    thumb.addEventListener("mouseenter", () => {
        mainImage.src = thumb.src;
        mainImage.alt = thumb.alt;
    });
});