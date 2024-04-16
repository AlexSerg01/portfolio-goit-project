import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const aboutMeSwiperBox = document.querySelector(
  '.swipper-and-button-wraper > .swiper'
);
const aboutMeNextButton = document.querySelector('.swiper-btn-next');

const swiper = new Swiper(aboutMeSwiperBox, {
  modules: [Navigation, Pagination, Keyboard],
  loop: true,

  navigation: {
    nextEl: aboutMeNextButton,
  },
  // centeredSlides: true,
  // watchOverflow: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  breakpoints: {
    375: {
      slidesPerView: 'auto',
      // spaceBetween: 18,
    },
    767: {
      slidesPerView: 'auto',
      // spaceBetween: 16,
    },
    1440: {
      slidesPerView: 'auto',
      // spaceBetween: 16,
    },
  },
  slidesPerView: 'auto',
});
import Accordion from 'accordion-js';

const accordionButtonTrigger = document.querySelector('.ac-trigger');

new Accordion('.accordion-container', {
  duration: 600,
  collapse: true,
  openOnInit: [0],
  showMultiple: true,
});
