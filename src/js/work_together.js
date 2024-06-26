import { PostRequest } from './api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const INPUT_LENGTH_BEFORE_CUT = 36;

const wtGlobalRefs = {
  wtCoopForm: document.querySelector('#WtForm'),
  wtModal: document.querySelector('.WorkTogetherModalWrapper'),
  wtResultMsg: document.querySelector('.CoopResultMsg'),
  wtModalRespTitle: document.querySelector('#WtModalRespTitle'),
  wtModalRespMessage: document.querySelector('#WtModalRespMessage'),
  wtModalClose: document.querySelector('.WorkTogetherModalClose'),
  wtModalBox: document.querySelector('.WorkTogetherModal'),
};

wtGlobalRefs.wtCoopForm.addEventListener('submit', sendWtUserData);
wtGlobalRefs.wtCoopForm.elements.email.addEventListener(
  'input',
  resetValidation
);
wtGlobalRefs.wtCoopForm.elements.email.addEventListener('blur', emailValidator);
wtGlobalRefs.wtCoopForm.elements.email.addEventListener('blur', inputCutString);
wtGlobalRefs.wtCoopForm.elements.email.addEventListener(
  'focus',
  inputFullString
);
wtGlobalRefs.wtCoopForm.elements.comment.addEventListener(
  'focus',
  inputFullString
);
wtGlobalRefs.wtCoopForm.elements.comment.addEventListener(
  'blur',
  inputCutString
);
wtGlobalRefs.wtModal.addEventListener('click', closeWtModal);
window.addEventListener('keydown', closeWtModal);

async function sendWtUserData(e) {
  e.preventDefault();
  try {
    const { email, comment } = wtGlobalRefs.wtCoopForm.elements;
    const data = await PostRequest(email.value, comment.value);
    openWtModal(data);
    wtGlobalRefs.wtCoopForm.reset();
    email.classList.remove('Invalid');
    email.classList.remove('Success');
    wtGlobalRefs.wtResultMsg.textContent = '';
  } catch (err) {
    iziToast.error({
      message: 'Something went wrong! Please, try again.',
      position: 'bottomCenter',
    });
  }
}

function openWtModal({ title, message }) {
  wtGlobalRefs.wtModalRespTitle.textContent = title;
  wtGlobalRefs.wtModalRespMessage.textContent = message;
  wtGlobalRefs.wtModal.classList.add('IsOpen');
}

function closeWtModal(e) {
  if (
    !wtGlobalRefs.wtModalBox.contains(e.target) ||
    wtGlobalRefs.wtModalClose.contains(e.target) ||
    e.code === 'Escape'
  ) {
    wtGlobalRefs.wtModal.classList.remove('IsOpen');
    wtGlobalRefs.wtResultMsg.textContent = '';
  }
}

function emailValidator(e) {
  e.target.value = e.target.value.trim();
  const pattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if (!e.target.value) {
    resetValidation(e);
    return;
  }
  if (e.target.value.match(pattern)) {
    showValidationSuccess();
  } else {
    showValidationInvalid();
  }
}

function showValidationSuccess() {
  const { email } = wtGlobalRefs.wtCoopForm.elements;
  email.classList.remove('Invalid');
  email.classList.add('Success');
  wtGlobalRefs.wtResultMsg.textContent = 'Success!';
  wtGlobalRefs.wtResultMsg.classList.add('Success');
}

function showValidationInvalid() {
  const { email } = wtGlobalRefs.wtCoopForm.elements;
  email.classList.remove('Success');
  email.classList.add('Invalid');
  wtGlobalRefs.wtResultMsg.textContent = 'Invalid email, try again';
  wtGlobalRefs.wtResultMsg.classList.remove('Success');
}

function resetValidation(e) {
  if (e.target.name === 'email') {
    wtGlobalRefs.wtResultMsg.textContent = '';
    wtGlobalRefs.wtResultMsg.classList.remove('Success');
  }
  const { email } = wtGlobalRefs.wtCoopForm.elements;
  email.classList.remove('Invalid');
  email.classList.remove('Success');
}

function inputCutString(e) {
  console.log(e.target.value.length);
  e.target.setAttribute('data-value', e.target.value.trim());
  if (e.target.value.length > INPUT_LENGTH_BEFORE_CUT) {
    e.target.value = e.target.value
      .slice(0, INPUT_LENGTH_BEFORE_CUT - 3)
      .concat('...');
  }
}

function inputFullString(e) {
  if (e.target.value) e.target.value = e.target.getAttribute('data-value');
}
