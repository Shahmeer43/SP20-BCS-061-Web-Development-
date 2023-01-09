$(function () {
  apiAjax();
});

function apiAjax() {
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "GET",
    success: apiData,
  });
}

function apiData(response) {
  console.log(response);
  var dataDiv = $("#data");
  dataDiv.empty();
  for (var i = 0; i < response.length; i++) {
    dataDiv.append(
      `<div   class = "titleDiv"><h3 class = "title">${response[i].id}- ${response[i].title}</h3> <p class = "body">${response[i].body} </p><button class = "btn btn-danger btn-sm float-right">Delete</button></div>`
    );
  }
}
