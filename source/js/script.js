/* в этот файл добавляет скрипты*/
let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
let navList = document.querySelector('.nav-list')

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
if (navMain.classList.contains('main-nav--closed')) {
  navMain.classList.remove('main-nav--closed');
  navMain.classList.add('main-nav--opened');
  navList.classList.remove('nav-list--closed')
  navList.classList.add('nav-list--opened');
} else {
navMain.classList.add('main-nav--closed');
navMain.classList.remove('main-nav--opened');
navList.classList.remove('nav-list--opened')
navList.classList.add('nav-list--closed');
}
})
