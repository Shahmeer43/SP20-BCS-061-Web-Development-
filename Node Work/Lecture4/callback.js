console.clear();

function pizza(flavour, callback) {
  console.log("preparing pizza");
  setTimeout(function () {
    callback(flavour);
  }, 1000);
}

function handlePizza(tikka) {
  console.log("Yes eating " + tikka + " Pizza");
}

console.log(pizza("tikka", handlePizza));
