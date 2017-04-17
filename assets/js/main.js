
document.addEventListener("DOMContentLoaded", function(event) { 
  var elements = document.querySelectorAll(".blurb-carousel li");
  var count = elements.length;
  var currentIndex = 0;

  var nextAnimation = function(e) {
    e.target.className = "";
    e.target.style.display = 'none';

    currentIndex += 1;
    if (currentIndex > count - 1) {
      currentIndex = 0;
    }

    elements[currentIndex].className = "show";
    elements[currentIndex].style.display = "block";
  };

  for (var index = 0; index < count; index++) {
    elements[index].addEventListener("webkitAnimationEnd", nextAnimation, false);
    elements[index].addEventListener("animationend", nextAnimation, false);
    elements[index].addEventListener("oanimationend", nextAnimation, false);
  }

  elements[0].className = "show";
  elements[0].style.display = "block";
});

