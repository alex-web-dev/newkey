
import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

Swiper.use([Navigation, Pagination, Scrollbar]);

var slidesNames = ['Название видео 1', 'Название видео 2', 'Название видео 3'];
const slider = new Swiper('.slides__list', {
  direction: 'vertical',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (slidesNames[index]) + '</span>';
    }
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    993: {
      direction: 'vertical',
    },
    320: {
      direction: 'horizontal',
    }
  }
});

const $slides = document.querySelector('.slides');

if ($slides) {
  const slidesAll = document.querySelector('.slides__total');
  const slidesCurrent = document.querySelector('.slides__current');

  slidesAll.innerHTML = '0' + slider.slides.length;

  slider.on('slideChange', function() {
    const currentSlide = ++slider.realIndex;
    slidesCurrent.innerHTML = '0' + currentSlide;
  });
}


new Swiper('.product-slider__main', {
  direction: 'horizontal',
  pagination: {
    el: '.product-slider__pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.product-slider__next',
    prevEl: '.product-slider__prev',
  },
  breakpoints: {
  }
});

new Swiper('.product__recommend-slider', {
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 55,
  watchOverflow: false,
  navigation: {
    nextEl: '.product__recommend-next',
    prevEl: '.product__recommend-prev',
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    }
  }
});

new Swiper('.product__simular-slider', {
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 30,
  watchOverflow: false,
  breakpoints: {
    1200: {
      direction: 'vertical',
      watchOverflow: false,
      slidesPerView: 3,
    },
    768: {
      direction: 'horizontal',
      slidesPerView: 2,
    }
  }
});