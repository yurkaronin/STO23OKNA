// Глобальные переменные 
let header = document.querySelector('.header');
let headerHeight = header.clientHeight;
let headerLogo = document.querySelector('.header__logo img');
let menuButton = document.querySelector('.button-menu');

let accordionBtns = document.querySelectorAll(".accordion__btn");

// получаем высоту шапки и передаём в глобальную переменную
document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`);

// функция подключения файлов со скриптами 
function include(url) {
  var script = document.createElement('script');
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}

include("./js/part/slider.js");
include("./js/part/header.js");
include("./js/part/accordion.js");
include("./js/part/menu.js");
include("./js/part/modal.js");

// для тестов 
// window.addEventListener('resize',function(){
//   location.reload();
// });

let callbackButtons = document.querySelectorAll('a[data-target^="specialist-call"]');
let modalCallBack = document.querySelector('#modal-specialist-call');


for (let callbackButton of callbackButtons) {

  let closeBtn = modalCallBack.querySelector('#close-modal');

  callbackButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalCallBack.classList.toggle('modal--show');
    // document.body.classList.add('custom-lock');
    // header.classList.add('hide');
  });

  closeBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalCallBack.classList.remove('modal--show');
    // document.body.classList.remove('custom-lock');
    // header.classList.remove('hide');
  });

};

let closeModal = document.querySelector('a[data-status^="on"]');
if (closeModal) {
  closeModal.addEventListener('click', function (evt) {
    evt.preventDefault();
    closeModal.closest('section[id^="modal-was-successful"]').classList.remove('modal--show');
  });
};

submit = function (evt) {
  document.querySelector('section[id^="modal-was-successful"]').classList.add('.modal--show');
}