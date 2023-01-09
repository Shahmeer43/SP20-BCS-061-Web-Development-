console.clear();
let rates = [2, 10, 20];
let newrates = rates.map(function (a) {
  return a * 2;
});

// console.log(newrates);

let obj = [
  {
    name: "Shahmeer",
    age: 12,
  },

  {
    name: "ali",
    age: 30,
  },
];

let searchObject = obj.findIndex((p) => {
  if (p.name == "ali") return true;
  else return console.log("no");
});

console.log(searchObject);
