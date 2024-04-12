// запит з бекенду
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

  