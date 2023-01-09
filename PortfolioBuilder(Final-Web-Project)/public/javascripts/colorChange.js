function changeColor() {
  const currentPage = document.URL;
  const links = document.getElementsByClassName("links");
  for (let link of links) {
    if (link.href == currentPage) {
      link.classList.add("current-link");
    }
  }
}

document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    changeColor();
  }
};
