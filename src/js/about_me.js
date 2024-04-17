import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const swiperAbout = new Swiper('.about-swiper-container', {
  loop: true,
  slidesPerGroup: 1,
  setWrapperSize: true,
  modules: [Navigation, Keyboard, Mousewheel],
  simulateTouch: true,
  grabCursor: true,
  slideActiveClass: 'active',
  navigation: {
    nextEl: '.about-swiper-button',
  },
  // mousewheel: {
  //   invert: true,
  // },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    375: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 35,
    },
    1440: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
  },
});
document.querySelector('.about-swiper-button').addEventListener('click', () => {
  swiperAbout.slideNext();
});

import Accordion from 'accordion-js';

const accordionButtonTrigger = document.querySelector('.ac-trigger');
new Accordion('.accordion-container', {
  duration: 600,
  collapse: true,
  openOnInit: [0],
  showMultiple: true,
});
