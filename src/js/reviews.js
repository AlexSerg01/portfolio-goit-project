// import Swiper bundle with all modules installed
import Swiper from 'swiper';

// import styles bundle
import 'swiper/css';

const screenWidth = window.innerWidth;
const swiper = new Swiper('.reviews-swiper', {
  // Optional parameters
  cssMode: true, 
  spaceBetween: (screenWidth >=768 && screenWidth < 1280) ? 14: 16,

  // Navigation arrows
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  mousewheel: true,
  keyboard: true,
  touch: true,
  
  // Віртуальні слайди
  virtual: {
    slides: (function () {

      let slide = []
      if (screenWidth < 768) {
        return ['', '', '', '', '', '']
      } else if ((screenWidth >= 768) && (screenWidth < 1440)) {
        return ['', '', '']        
      } else if (screenWidth >= 1440) {
        return ['', '']
      }
    }()),
    addSlidesBefore: screenWidth >= 768 ? 1 : 5, 
    addSlidesAfter: screenWidth >= 768 ? 1 : 5,
  }
});




// запит з бекенду=========================================================
const reviewsList = document.getElementById('reviewsList');

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
        <li class="review">
        <img class="user-icon" src="${review.avatar_url}" alt="Avatar">
          <h4 class="name">${review.author}</h4>
          <p class="review-text">${review.review}</p>
        </li>
      `;
    }).join("");

    reviewsList.innerHTML = markup; // Вставляємо HTML у список відгуків
  })
  .catch((error) => console.log(error));


  
  