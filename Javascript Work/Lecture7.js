function addToDoList() {
  console.log("add to do list");
}

window.onload = () => {
  var a = document.getElementById("mybutton");
  a.onclick = addToDoList;
};
