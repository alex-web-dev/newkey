
import '@/scss/styles.scss';

const $header = document.querySelector('.header');
const $headerMenu = $header.querySelector('.header__menu');
const $menuToggle = $headerMenu.querySelector('.menu__toggle');
const $menuClose = $headerMenu.querySelector('.menu__close');
const menuAdaptive = 1200;

$menuToggle.addEventListener('click', () => {
  if (window.innerWidth > menuAdaptive) {
    return;
  }
  
  $headerMenu.classList.toggle('menu_active');
  document.body.classList.toggle('body_lock');  
});

$menuClose.addEventListener('click', () => {
  if (window.innerWidth > menuAdaptive) {
    return;
  }
  
  $headerMenu.classList.remove('menu_active');
  document.body.classList.remove('body_lock');  
});

const $menuLinks = $headerMenu.querySelectorAll('.menu__link');
$menuLinks.forEach($link => {
  $link.addEventListener('click', () => {
    if (window.innerWidth > menuAdaptive) {
      return;
    }
    
    // $headerMenu.classList.remove('menu_active');
  });
});


const $menuHasChildrenItems = document.querySelectorAll('.menu__item_has-children');
const $menuBack = document.querySelector('.menu__back');

$menuHasChildrenItems.forEach(($item) => {
  $item.addEventListener('click', () => {
    $item.classList.add('menu__item_active');
    $headerMenu.classList.add('menu_open');
  });
});

$menuBack.addEventListener('click', () => {
    const $activeItem = document.querySelector('.menu__item_active');
    $activeItem.classList.remove('menu__item_active');
    $headerMenu.classList.remove('menu_open');
});