// Глобальные переменные 
let header = document.querySelector('.header');
let headerHeight = header.clientHeight;
let headerLogo = document.querySelector('.header__logo img');
let menuButton = document.querySelector('.button-menu');

let accordionBtns = document.querySelectorAll(".accordion__btn");

let callbackButtons = document.querySelectorAll('a[data-target^="specialist-call"]');
let modalCallBack = document.querySelector('#modal-specialist-call');

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
include("./js/part/animate.js");

// плавный скролл по страницам
SmoothScroll({
  // Время скролла 400 = 0.4 секунды
  animationTime: 800,
  // Размер шага в пикселях
  stepSize: 75,

  // Дополнительные настройки:

  // Ускорение
  accelerationDelta: 30,
  // Максимальное ускорение
  accelerationMax: 2,

  // Поддержка клавиатуры
  keyboardSupport: true,
  // Шаг скролла стрелками на клавиатуре в пикселях
  arrowScroll: 50,

  // Pulse (less tweakable)
  // ratio of "tail" to "acceleration"
  pulseAlgorithm: true,
  pulseScale: 4,
  pulseNormalize: 1,

  // Поддержка тачпада
  touchpadSupport: true,
});

// Кастомная валидация форм
(function () {
  window.addEventListener("click", function (event) {

    if (event.target.classList.contains("js-validate")) {

      const formParent = event.target.closest("form");

      formParent.querySelectorAll(".custom-form__item-wrapper").forEach(function (item) {
        console.log(item)
        if (item.querySelector("[data-required]")) {
          if (item.querySelector("[data-required]").value === '') {
            console.log("не заполнен")
            item.classList.add("js-field-error");
          } else {
            console.log("заполнен")
            item.classList.remove("js-field-error");
          }
        }
      });
    }
  })
})();

Inputmask("+7 (999) 999-99-99").mask('[type="tel"]');