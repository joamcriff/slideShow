let slideIndex = 1;
var prev = document.getElementById('prev');
var next = document.getElementById('next');
let slideDot = document.querySelectorAll('.dot');
prev.onclick = function() {
    showSlides(slideIndex--);
};
next.onclick = function() {
    showSlides(slideIndex++);
};

slideDot.forEach(function(slide, index) {
    slide.onclick = function(){
        showSlides(slideIndex=index+1);
    }
})

setInterval(() => {
    showSlides(slideIndex++);
},5000);
export default function showSlides(n){
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName('dot');
    for(let i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
    if(slideIndex > slides.length){
        slideIndex=1;
    }
    if(slideIndex <= 0){
        slideIndex=slides.length;
    }
    slides[slideIndex-1].style.display="block";
    dots[slideIndex-1].className += " active"; 
}