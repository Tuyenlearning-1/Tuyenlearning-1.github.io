// hieu ung hover anh
const tilt = $('.thumb').tilt();


// smooth scroll
let scroll = new SmoothScroll('header__list header__item a[href*="#"]', {
	speed: 500
});

// Animation items
AOS.init();

// nav btn toggle 
const toggleBtn = document.querySelector('.nav-toggle');
const navFixed = document.querySelector('.header__nav--small');
const navClose = document.querySelector('.header__nav--close');



toggleBtn.addEventListener('click', function(){
	navFixed.classList.toggle('active');
})
navClose.addEventListener('click', function(){
	navFixed.classList.remove('active');
})
