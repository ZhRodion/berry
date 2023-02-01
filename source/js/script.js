/* в этот файл добавляет скрипты*/
// let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
let navList = document.querySelector('.nav-list');

// navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
if (navList.classList.contains('nav-list--closed')) {
  navList.classList.remove('nav-list--closed');
  navList.classList.add('nav-list--opened');
} else {
  navList.classList.add('nav-list--closed');
  navList.classList.remove('nav-list--opened');
}
})
// navToggle.addEventListener('click', function () {
//   if (burgClosd.classList.contains('main-nav__toggle--closed')) {
//     navList.classList.remove('main-nav__toggle--closed');
//     navList.classList.add('main-nav__toggle--opened');
//   } else {
//     navList.classList.add('main-nav__toggle--closed');
//     navList.classList.remove('main-nav__toggle--opened');
//   }
//   })
