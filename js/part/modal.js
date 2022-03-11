for (let callbackButton of callbackButtons) {

  let closeBtn = modalCallBack.querySelector('#close-modal');

  callbackButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalCallBack.classList.toggle('modal--show');
  });

  closeBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalCallBack.classList.remove('modal--show');
  });

};

let closeModal = document.querySelector('a[data-status^="on"]');
if (closeModal) {
  closeModal.addEventListener('click', function (evt) {
    evt.preventDefault();
    closeModal.closest('section[id^="modal-was-successful"]').classList.remove('modal--show');
  });
};