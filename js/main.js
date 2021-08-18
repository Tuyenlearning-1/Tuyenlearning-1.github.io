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
const navClose = document.querySelector('.nav--close');
let navChange = document.querySelector('.nav--change');
let navFixed = document.querySelector('.header__list');



toggleBtn.addEventListener('click', function(){
		navFixed.classList.toggle('active');
})
navClose.addEventListener('click', function(){
	navFixed.classList.remove('active');
})
