
import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

Swiper.use([Navigation, Pagination, Scrollbar]);

import '@/scss/styles.scss';

const $header = document.querySelector('.header');
const $headerMenu = $header.querySelector('.header__menu');
const $menuToggle = $headerMenu.querySelector('.menu__toggle');
const $menuClose = $headerMenu.querySelector('.menu__close');
const menuAdaptive = 1200;

let lastYOffset = 0;
window.addEventListener('scroll', () => {
  if (window.pageYOffset >= 200 && window.pageYOffset > lastYOffset && !$header.className.includes('header_reduced')) {
    $header.classList.add('header_reduced');
  } else if (window.pageYOffset < lastYOffset && $header.className.includes('header_reduced')) {
    $header.classList.remove('header_reduced');
  }

  lastYOffset = window.pageYOffset;
});

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
  });
});


const $menuHasChildrenItems = document.querySelectorAll('.menu__item_has-children');
const $menuBack = document.querySelector('.menu__back');
const $menuSubmenu = document.querySelector('.menu__submenu');

$menuSubmenu.addEventListener('click', (e) => {
  if (e.target === $menuSubmenu) {
    const $activeItem = document.querySelector('.menu__item_active');
    $activeItem.classList.remove('menu__item_active');
  }
});

$menuHasChildrenItems.forEach(($item) => {
  $item.addEventListener('click', (e) => {
    if (e.target === $menuSubmenu) {
      return;
    }
    
    if (window.innerWidth <= 1200) {
      $item.classList.add('menu__item_active');
      $headerMenu.classList.add('menu_open');
    } else {
      $item.classList.add('menu__item_active');
    }
  });
});

$menuBack.addEventListener('click', () => {
    const $activeItem = document.querySelector('.menu__item_active');
    $activeItem.classList.remove('menu__item_active');
    $headerMenu.classList.remove('menu_open');
});

var menu = ['Название видео 1', 'Название видео 2', 'Название видео 3'];
const slider = new Swiper('.slides__list', {
  direction: 'vertical',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (menu[index]) + '</span>';
    }
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  breakpoints: {
    992: {
      direction: 'vertical',
    },
    320: {
      direction: 'horizontal',
    }
  }
});

const slidesAll = document.querySelector('.slides__total');
const slidesCurrent = document.querySelector('.slides__current');

slidesAll.innerHTML = '0' + slider.slides.length;

slider.on('slideChange', function() {
  const currentSlide = ++slider.realIndex;
  slidesCurrent.innerHTML = '0' + currentSlide;
});