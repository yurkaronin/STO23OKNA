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