$(function () {
  apiAjax();
  $("#data").on("click", ".btn-danger", ajaxDel);
  $("#data").on("click", ".btn-warning", editData);
  $("#addButton").click(addNewTitleBody);
  $("#UpdateSave").click(function () {
    var id = $("#updateId").val();
    var title = $("#updateTitle").val();
    var body = $("#updateBody").val();
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/posts/" + id,
      data: { title, body },
      method: "PUT",
      success: function (response) {
        console.log(response);
        apiAjax();
        $("#updateModal").modal("hide");
      },
    });
  });
});

// PUT
function editData() {
  console.log("edit button clicked");

  var editButtonId = $(this);
  var parDiv = editButtonId.closest(".titleDiv");
  var id = parDiv.attr("data-id");
  $.get(
    "https://jsonplaceholder.typicode.com/posts/" + id,
    function (response) {
      $("#updateId").val(response.id);
      $("#updateTitle").val(response.title);
      $("#updateBody").val(response.body);
      $("#updateModal").modal("show");
    }
  );
}

// POST

function addNewTitleBody() {
  var title = $("#addtitle").val();
  var body = $("#addbody").val();

  $.ajax({
    url: "https://jsonplaceholder.typicode.com/posts/",
    method: "POST",
    data: { title, body },
    success: function (response) {
      console.log(response);
      console.log("Successfully Added");
      apiAjax();
    },
  });
}

// DELETE
function ajaxDel() {
  var delButtonId = $(this);
  var parDiv = delButtonId.closest(".titleDiv");
  var id = parDiv.attr("data-id");
  console.log(id);

  $.ajax({
    url: "https://jsonplaceholder.typicode.com/posts/" + id,
    method: "DELETE",
    success: function (response) {
      console.log(response);
      console.log("successfully deleted");
      apiAjax();
    },
    error: function () {
      console.log("An error has occurred");
    },
  });
}

// GET
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
