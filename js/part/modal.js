for (let callbackButton of callbackButtons) {

  callbackButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalCallBack.classList.toggle('modal--show');
  });

};

let closeBtns = document.querySelectorAll('.modal__close-button');
for (let closeBtn of closeBtns) {
  closeBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    closeBtn.closest('section').classList.remove('modal--show');
  })
};

// Для тестов и демонстраций диалоговых окон (На проде УДАЛИТЬ!)
let submitBtns = document.querySelectorAll('button[type="submit"]');

for (let submitBtn of submitBtns) {
  submitBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalCallBack.classList.remove('modal--show');
    document.querySelector('.js-successful-modal').classList.add('modal--show');
  })
};

let closeModal = document.querySelector('a[data-status^="on"]');
if (closeModal) {
  closeModal.addEventListener('click', function (evt) {
    evt.preventDefault();
    closeModal.closest('section[id^="modal-was-successful"]').classList.remove('modal--show');
  });
};