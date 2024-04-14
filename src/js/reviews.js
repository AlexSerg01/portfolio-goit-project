// import Swiper bundle with all modules installed
import Swiper from 'swiper';

// import styles bundle
import 'swiper/css';


const reviewsList = document.getElementById('reviewsList');
const screenWidth = window.innerWidth;
let slidesPerView;

if (screenWidth >= 1280) {
  slidesPerView = 4;
} else if (screenWidth >= 768 && screenWidth < 1280) {
  slidesPerView = 2;
} else if (screenWidth < 768) {
  slidesPerView = 1;
}

function createSwiper() {
console.log(screenWidth)
const swiper = new Swiper('.reviews-swiper', {
  // Optional parameters
  cssMode: true, 
  slidesPerView: slidesPerView,
  slidesPerGroup: 1,
  

  // Navigation arrows
  navigation: {
    disabledClass: "BtnOff",
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  mousewheel: true,
  keyboard: true,
  touch: true,
  
});


}

// запит з бекенду=========================================================
// const reviewsList = document.getElementById('reviewsList');

fetch("https://portfolio-js.b.goit.study/api/reviews")
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then((reviews) => {
    const markup = reviews.map((review) => {
      return `
        <div class="review swiper-slide">
        <img class="user-icon" src="${review.avatar_url}" alt="Avatar">
          <h4 class="name">${review.author}</h4>
          <p class="review-text">${review.review}</p>
        </div>
      `;
    }).join("");

    reviewsList.innerHTML = markup; // Вставляємо HTML у список відгуків
    createSwiper()
  })
  .catch((error) => console.log(error));


  
  