console.clear();
function pizzaMaking(flavour) {
  setTimeout(function () {
    console.log("Preparing Pizza");
    return flavour + " Pizza" + " prepared";
  }, 1000);
  return "Order Recieved " + flavour + " Pizza";
}

console.log(pizzaMaking("fajita"));
