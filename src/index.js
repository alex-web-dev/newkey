
import './js/sliders';
import './js/menu';
import './js/cart';

import '@/scss/styles.scss';

const $header = document.querySelector('.header');

let lastYOffset = 0;
window.addEventListener('scroll', () => {
  if (window.pageYOffset >= 200 && window.pageYOffset > lastYOffset && !$header.className.includes('header_reduced')) {
    $header.classList.add('header_reduced');
  } else if (window.pageYOffset < lastYOffset && $header.className.includes('header_reduced')) {
    $header.classList.remove('header_reduced');
  }

  lastYOffset = window.pageYOffset;
});

moveElem('footer__contacts', 'footer__right', 'footer__middle', 1400);

window.addEventListener('resize', () => {
  moveElem('footer__contacts', 'footer__right', 'footer__middle', 1400);
});

function moveElem(elemClass, fromClass, toClass, width) {
  
  const $elem = document.querySelector(`.${elemClass}`);
  const $from = document.querySelector(`.${fromClass}`);
  const $to = document.querySelector(`.${toClass}`);

  if (!$elem || !$from || !$to) {
    return;
  }

  if (window.innerWidth <= width && $elem.closest(`.${fromClass}`)) {
    $to.append($elem);
  } else if (window.innerWidth > width && !$elem.closest(`.${fromClass}`)) {
    $from.append($elem);
  }
}