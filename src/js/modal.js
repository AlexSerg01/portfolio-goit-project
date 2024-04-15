// const modal = document.getElementById('myModal');

// const btn = document.querySelector('button');

// const span = document.getElementsByClassName('close')[0];

// btn.onclick = function () {
//   modal.style.display = 'block';
// };

// span.onclick = function () {
//   modal.style.display = 'none';
// };

// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = 'none';
//   }
// };

// document.onkeydown = function (event) {
//   if (event.key === 'Escape') {
//     modal.style.display = 'none';
//   }
// };

const MODAL = document.querySelector(".ModalMenu")
const OPEN_BTN = document.querySelector("#openModal")
const CLOSE_BTN = document.querySelector(".CloseModalBtn")

OPEN_BTN.addEventListener("click", doOpenMenu)
CLOSE_BTN.addEventListener("click", doCloseModal)


function doOpenMenu() {
  MODAL.classList.add("ModalOpen")
}

function doCloseModal() {
  MODAL.classList.remove("ModalOpen")
  console.log("hi")
}