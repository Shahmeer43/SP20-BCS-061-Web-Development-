function addToDoList() {
  var newTodo = document.getElementById("newTodos").value;
  var todo = document.getElementById("todos");
  var newNode = document.createTextNode(newTodo);
  var newli = document.createElement("li");
  newli.appendChild(newNode);
  todo.appendChild(newli);
}

window.onload = () => {
  var button = document.getElementById("mybutton");
  button.onclick = addToDoList;
};

function handleDelete(e) {
  var tag = e.target;
  var li = tag.parentNode;
  li.parentNode.removeChild(li);
}
