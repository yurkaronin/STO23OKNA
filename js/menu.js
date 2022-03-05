// кнопка меню
let menuButton = document.querySelector('.button-menu');
let headerLogo = document.querySelector('.logo__image');

if (menuButton) {
  menuButton.addEventListener('click', function (r) {
    // document.body.classList.toggle('custom-lock');
    document.body.classList.toggle('menu-show');
    menuButton.classList.toggle('active');
  });

}