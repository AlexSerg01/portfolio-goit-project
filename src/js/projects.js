// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

new Swiper('.swiper', {
  // Optional parameters
  cssMode: true,
  spaceBetween: 30,

  // Navigation arrows
  navigation: {
    nextEl: '.SwButtonNext',
    prevEl: '.SwButtonPrev',
  },
  mousewheel: true,
  keyboard: true,
  touch: true,
});
