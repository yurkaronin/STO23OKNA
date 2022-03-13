// показать меню при клике на кнопку
if (menuButton) {
  menuButton.addEventListener('click', function (r) {
    // document.body.classList.toggle('custom-lock');
    document.body.classList.toggle('menu-show');
    menuButton.classList.toggle('active');
  });

};

// //плавная прокрутка до блока js
let anchors = document.querySelectorAll('a[data-target^="anchor"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    let activeLink = document.querySelector('.main-nav__link.active');
    if (activeLink) {
      activeLink.classList.remove('active');
    }

    anchor.classList.add('active');
    const sectionTarget = anchor.getAttribute("href");
    let targetOffset = document.querySelector("" + sectionTarget).offsetTop - headerHeight;
    window.scrollTo({
      top: targetOffset,
      behavior: "smooth"
    });
    // свернуть меню при клике по пункту меню на мобилках
    if (window.innerWidth <= 1150) {
      document.body.classList.remove('menu-show');
      console.log('test');
    }
  });
};