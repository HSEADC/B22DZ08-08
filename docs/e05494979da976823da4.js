function changeColor(selectedCircle) {
  var circles = document.querySelectorAll('.circle');
  circles.forEach(function (circle) {
    if (circle.classList.contains('selected')) {
      circle.classList.remove('selected');
      circle.classList.add('unselected');
    }
  });
  selectedCircle.classList.remove('unselected');
  selectedCircle.classList.add('selected');
}