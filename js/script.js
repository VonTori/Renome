var headerMain = document.querySelector(".page-header");
var navMain = document.querySelector(".page-nav");
var navButton = document.querySelector(".page-header__button");
var menuSlider = document.querySelector(".menu-slider");
var topSlider = document.querySelector(".top-slider");

var i;
var myIndex = 0;
var slideIndex = 1;

var x = document.querySelectorAll(".top-slider__item");
var slides = document.querySelectorAll(".menu-slider__item");

showSlides(slideIndex);
carousel();

menuSlider.classList.remove("menu-slider--no-js");
headerMain.classList.remove("page-header--no-js");
navMain.classList.remove("page-nav--no-js");
topSlider.classList.remove("top-slider--no-js");

navMain.classList.remove("page-nav--opened");
navMain.classList.add("page-nav--closed");

navButton.addEventListener("click", function() {
  if (navMain.classList.contains("page-nav--closed")) {
    navMain.classList.remove("page-nav--closed");
    navMain.classList.add("page-nav--opened");
  } else {
    navMain.classList.add("page-nav--closed");
    navMain.classList.remove("page-nav--opened");
  } 
});

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  if(n > slides.length) {
    slideIndex = 1;
  }
  if(n < 1) {
   slideIndex = slides.length;
  }
  for(i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

function carousel() {
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1
  }
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 6000);
}