$(function () {
  $("#load").click(sendAjax);
});

function sendAjax() {
  $.get("Lecture10.txt", handleResponse);
}

function handleResponse(res) {
  $("#result").empty();
  $("#result").append(res);
}
