for (let accordionBtn of accordionBtns) {
  accordionBtn.onclick = function () {
    accordionBtn.parentNode.classList.toggle('active');

  }

}