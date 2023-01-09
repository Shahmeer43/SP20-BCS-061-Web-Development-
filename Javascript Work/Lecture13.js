$(function () {
  apiAjax();
  $("#data").on("click", ".btn-danger", ajaxDel);
});

function ajaxDel() {
  var delButtonId = $(this);
  var parDiv = delButtonId.closest(".titleDiv");
  var id = parDiv.attr("data-id");
  console.log(id);

  $.ajax({
    url: "https://jsonplaceholder.typicode.com/posts/" + id,
    method: "DELETE",
    success: function () {
      console.log("successfully deleted");
      apiAjax();
    },
    error: function () {
      console.log("An error has occurred");
    },
  });
}

function apiAjax() {
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "GET",
    success: apiData,
    error: function () {
      console.log("An error has occurred");
      $("#data").html("An Error has occurred");
    },
  });
}

function apiData(response) {
  console.log(response);
  var dataDiv = $("#data");
  dataDiv.empty();
  for (var i = 0; i < response.length; i++) {
    dataDiv.append(
      `<div  data-id = "${response[i].id}" class = "titleDiv"><h3 class = "title">${response[i].id}- ${response[i].title}</h3> <p class = "body">${response[i].body} </p><button class = "btn btn-warning btn-sm float-right">Edit</button><button class = "btn btn-danger btn-sm float-right">Delete</button></div>`
    );
  }
}
