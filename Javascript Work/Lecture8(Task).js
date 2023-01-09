function addtodolist() {
  // making of new list item
  var valueTodo = document.getElementById("newTodo").value;
  var todo = document.getElementById("todos");
  var newnode = document.createTextNode(valueTodo);
  var newli = document.createElement("li");
  newli.appendChild(newnode);

  //delete button append logic
  var newbutton = document.createElement("button");
  var buttonText = document.createTextNode("Delete");
  newbutton.appendChild(buttonText);
  newbutton.className = "delete";
  newli.innerHTML = newli.innerHTML + newbutton.outerHTML;

  //new list item append to unorderList
  todo.appendChild(newli);
}

function bindings() {
  var button = document.getElementById("btn");
  button.onclick = addtodolist;
  delToDoList();

  //This line for updating deltodolist funtion whenever new list item will add
  document.getElementById("btn").addEventListener("click", delToDoList);
}

function handleDelete(e) {
  console.log("This is e:" + e);
  var tag = e.target;
  var li = tag.parentNode;
  li.parentNode.removeChild(li);
}

function delToDoList() {
  var del = document.getElementsByClassName("delete");
  console.log(del.length);
  for (var i = 0; i < del.length; i++) {
    del[i].addEventListener("click", handleDelete);
  }
}

window.onload = bindings;
