// Глобальные переменные 
let header = document.querySelector('.header');
let headerHeight = header.clientHeight;
let headerLogo = document.querySelector('.header__logo img');
let menuButton = document.querySelector('.button-menu');

// получаем высоту шапки и передаём в глобальную переменную
document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`);

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

// window.addEventListener('resize',function(){
//   location.reload();
// });
