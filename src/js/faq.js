import Accordion from 'accordion-js';

new Accordion('.faq-list', {
  duration: 400,
  showOne: true,
  showMultiple: true,
  onToggle: function (event) {
    const button = event.target.closest('.qwestions');
    if (button) {
      button.classList.toggle('is-active');
    }
  },
});
