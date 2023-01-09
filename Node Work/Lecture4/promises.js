console.clear();
function pizza(flavour) {
  return new Promise((resolve, reject) => {
    if (flavour == "fajita") {
      reject("Fajita pizza is out of stoock");
    } else {
      setTimeout(function () {
        resolve(flavour + " Pizza available");
      }, 1000);
    }
  });
}

pizza("tikka")
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.log(message);
  });

pizza();

// console.log(pizza());
