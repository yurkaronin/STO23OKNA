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



