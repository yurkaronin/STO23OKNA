let header = document.querySelector('.header');
let headerHeight = header.clientHeight;
let headerLogo = document.querySelector('.header__logo img');

// получаем высоту шапки и передаём в глобальную переменную
document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`);


// прилипающая шапка
window.onscroll = function showHeader() {

  if (window.pageYOffset > headerHeight) {
    header.classList.add('header--sticky');

    if (window.innerWidth <= 600) {
      headerLogo.src = 'img/logotype/logo-min.svg';
    } else {
      headerLogo.src = 'img/logotype/logo-black.svg';
    }


  } else {
    header.classList.remove('header--sticky');
    

    if (window.innerWidth <= 600) {
      headerLogo.src = 'img/logotype/logo-black.svg';
    } else {
      headerLogo.src = 'img/logotype/logo.svg';
    }
  }
}