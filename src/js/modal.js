const modal = document.getElementById('myModal');

const btn = document.querySelector('button');

const span = document.getElementsByClassName('close')[0];

btn.onclick = function () {
  modal.style.display = 'block';
};

span.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

document.onkeydown = function (event) {
  if (event.key === 'Escape') {
    modal.style.display = 'none';
  }
};
