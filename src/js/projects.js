// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

new Swiper('.swiper', {
  // Optional parameters
  cssMode: false,
  spaceBetween: 30,

  // Navigation arrows
  navigation: {
    nextEl: '.SwButtonNext',
    prevEl: '.SwButtonPrev',
  },
  mousewheel: false,
  keyboard: true,
  touch: true,
});
