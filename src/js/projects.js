// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
  // Optional parameters
  cssMode: true,
  spaceBetween: 30,

  // Navigation arrows
  navigation: {
    nextEl: '.s-button-next',
    prevEl: '.s-button-prev',
  },
  mousewheel: true,
  keyboard: true,
});
