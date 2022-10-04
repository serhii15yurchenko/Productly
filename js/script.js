const HEADER = document.querySelector('.header');
const BURGER = HEADER.querySelector('.burger');
const MENU = HEADER.querySelector('.mobile__wrapper');

BURGER.addEventListener('click', function() {
    HEADER.classList.toggle('header__active')
    document.body.classList.toggle('no-scroll')
});

MENU.addEventListener('click', function() {
    HEADER.classList.remove('header__active')
    document.body.classList.remove('no-scroll')
});