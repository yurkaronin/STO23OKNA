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