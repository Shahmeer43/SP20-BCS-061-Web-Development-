function setColor(button, color) {
  var count = 1;
  var property = document.getElementById(button);
  if (count == 0) {
    property.style.backgroundColor = "#FFFFFF";
    count = 1;
  } else {
    property.style.backgroundColor = "red";
    count = 0;
  }
}
