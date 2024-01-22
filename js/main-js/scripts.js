$(document).ready(function () {
  $(".slider").slick({
    autoplay: true,
    autoplaySpeed: 7000,
    speed: 1000,
    arrows: false,
    dots: false,
  });
});

$(window).scroll(function () {
  var element = $(".descr-block__date");
  var windowHeight = $(window).height();

  element.each(function () {
    var elementTop = $(this).offset().top;
    var scrollTop = $(window).scrollTop();
    var distance = elementTop - scrollTop;

    if (distance < windowHeight) {
      var $this = $(this);
      if (!$this.data("counted")) {
        $this.data("counted", true);
        $({ Counter: 0 }).animate(
          { Counter: $this.text() },
          {
            duration: 2500,
            easing: "swing",
            step: function () {
              $this.text(Math.ceil(this.Counter));
            },
            complete: function () {
              $(window).unbind("scroll");
            },
          }
        );
      }
    }
  });
});

var element = document.querySelector("#burger-menu");
var targetElement = document.querySelector("#header-section");

element.addEventListener("click", function () {
  if (targetElement.classList.contains("header")) {
    targetElement.classList.remove("header");
  } else {
    targetElement.classList.add("header");
  }
});

var element = document.querySelector("#slider-burger-menu");

element.addEventListener("click", function () {
  if (targetElement.classList.contains("header")) {
    targetElement.classList.remove("header");
  } else {
    targetElement.classList.add("header");
  }
});
