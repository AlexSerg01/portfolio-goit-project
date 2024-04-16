import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const swiperAbout = new Swiper('.about-swiper-container', {
  loop: true,
  setWrapperSize: true,
  modules: [Navigation, Keyboard, Mousewheel],
  spaceBetween: 0,
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
    },
    375: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 6,
    },
  },
});
document.querySelector('.about-swiper-button').addEventListener('click', () => {
  swiperAbout.slideNext();
});
