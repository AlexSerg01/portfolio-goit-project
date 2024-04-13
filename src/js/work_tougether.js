import { PostRequest } from './api';

const wtGlobalRefs = {
  wtCoopForm: document.querySelector('#WtForm'),
  wtModal: document.querySelector('.WorkTogetherModalWrapper'),
  wtResultMsg: document.querySelector('.CoopResultMsg'),
};

wtGlobalRefs.wtCoopForm.addEventListener('submit', sendWtUserData);
wtGlobalRefs.wtCoopForm.elements.email.addEventListener('blur', emailValidator);
wtGlobalRefs.wtModal.addEventListener('click', closeWtModal);

async function sendWtUserData(e) {
  e.preventDefault();
  wtGlobalRefs.wtResultMsg.textContent = '';
  try {
    const data = await PostRequest(
      wtGlobalRefs.wtCoopForm.elements.email.value,
      wtGlobalRefs.wtCoopForm.elements.comment.value
    );
    openWtModal(data);
    showSuccess();
    wtGlobalRefs.wtCoopForm.reset();
  } catch (err) {}
}

function openWtModal({ title, message }) {
  const refs = {
    wtModalRespTitle: document.querySelector('#WtModalRespTitle'),
    wtModalRespMessage: document.querySelector('#WtModalRespMessage'),
  };
  refs.wtModalRespTitle.textContent = title;
  refs.wtModalRespMessage.textContent = message;
  wtGlobalRefs.wtModal.classList.add('IsOpen');
}

function closeWtModal(e) {
  const refs = {
    wtModalClose: document.querySelector('.WorkTogetherModalClose'),
    wtModalBox: document.querySelector('.WorkTogetherModal'),
  };
  if (
    !refs.wtModalBox.contains(e.target) ||
    refs.wtModalClose.contains(e.target)
  ) {
    wtGlobalRefs.wtModal.classList.remove('IsOpen');
    wtGlobalRefs.wtResultMsg.textContent = '';
  }
}

function emailValidator(e) {
  e.target.value = e.target.value.trim();
  const pattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if (!e.target.value) {
    resetValidation();
    return;
  }
  if (e.target.value.match(pattern)) {
    showValidationSuccess();
  } else {
    showValidationInvalid();
  }
}

function showValidationSuccess() {
  wtGlobalRefs.wtCoopForm.elements.email.classList.remove('Invalid');
  wtGlobalRefs.wtCoopForm.elements.email.classList.add('Success');
  wtGlobalRefs.wtResultMsg.textContent = 'Success!';
  wtGlobalRefs.wtResultMsg.classList.add('Success');
}

function showValidationInvalid() {
  wtGlobalRefs.wtCoopForm.elements.email.classList.remove('Success');
  wtGlobalRefs.wtCoopForm.elements.email.classList.add('Invalid');
  wtGlobalRefs.wtResultMsg.textContent = 'Invalid email, try again';
  wtGlobalRefs.wtResultMsg.classList.remove('Success');
}

function resetValidation() {
  wtGlobalRefs.wtCoopForm.elements.email.classList.remove('Invalid');
  wtGlobalRefs.wtCoopForm.elements.email.classList.remove('Success');
  wtGlobalRefs.wtResultMsg.textContent = '';
  wtGlobalRefs.wtResultMsg.classList.remove('Success');
}
