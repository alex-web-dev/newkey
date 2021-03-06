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