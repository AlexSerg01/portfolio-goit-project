// import Swiper bundle with all modules installed
import Swiper from 'swiper';
import { doFetch } from './api';

// import styles bundle
import 'swiper/css';

const SCREEN_WIDTH = window.innerWidth;
let slidesPerView;

if (SCREEN_WIDTH >= 1440) {
  slidesPerView = 4;
} else if (SCREEN_WIDTH >= 768 && SCREEN_WIDTH < 1440) {
  slidesPerView = 2;
} else if (SCREEN_WIDTH < 768) {
  slidesPerView = 1;
}

function createSwiper() {
const SWIPER = new Swiper('.reviews-swiper', {
  // Optional parameters
  cssMode: true, 
  slidesPerView: slidesPerView,
  slidesPerGroup: 1,
  // Navigation arrows
  navigation: {
    disabledClass: "BtnOff",
    nextEl: '.ButtonNext',
    prevEl: '.ButtonPrev',
  },
  mousewheel: true,
  keyboard: true,
  touch: true,
  });
}

function doMurkUp(review) {
  return`
        <div class="Review swiper-slide">
        <img class="UserIcon" src="${review.avatar_url}" alt="Avatar">
          <h4 class="Name">${review.author}</h4>
          <p class="ReviewText">${review.review}</p>
        </div>
      `
}

// запит з бекенду=========================================================

doFetch(createSwiper, doMurkUp)





  
  