// показать меню при клике на кнопку
if (menuButton) {
  menuButton.addEventListener('click', function (r) {
    // document.body.classList.toggle('custom-lock');
    document.body.classList.toggle('menu-show');
    menuButton.classList.toggle('active');
  });

}

// //плавная прокрутка до блока js
let anchors = document.querySelectorAll('a[data-target^="anchor"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector('.main-nav__link.active').classList.remove('active');
    anchor.classList.toggle('active');
    const sectionTarget = anchor.getAttribute("href");
    let targetOffset = document.querySelector("" + sectionTarget).offsetTop - headerHeight;
    window.scrollTo({
      top: targetOffset,
      behavior: "smooth"
    });
  });
}