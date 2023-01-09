// this function is for bindings
$(() => {
  $("#todos li").click(removeListItem);
  $("#btn").click(addTodos);
});

function addTodos() {
  var newtodo = $("#newTodo").val();

  if (!newtodo) {
    $("#newTodo").addClass("error");
    return;
  }
  $("#newTodo").removeClass("error");
  $("#todos").append("<li>" + newtodo + "</li>");
  $("#newTodo").val("");

  //have to write this line again to bind remove event with the new list items
  $("#todos li").click(removeListItem);
}

function removeListItem() {
  $(this).remove();
}
