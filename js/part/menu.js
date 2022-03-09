// показать меню при клике на кнопку
if (menuButton) {
  menuButton.addEventListener('click', function (r) {
    // document.body.classList.toggle('custom-lock');
    document.body.classList.toggle('menu-show');
    menuButton.classList.toggle('active');
  });

}