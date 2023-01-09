console.clear();
const exp = require("express");
const app = exp();
app.use(exp.json());

var products = ["LCD", "Phone", "TV"];
app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/products", (req, res) => {
  res.send(products);
});

app.get("/products/:index", (req, res) => {
  res.send(products[req.params.index]);
});

app.post("/products", (req, res) => {
  products.push(req.body.name);
  res.send(products);
});

app.delete("/products/:index", (req, res) => {
  products.splice(req.params.index, 1);
  res.send(products);
});

app.put("/products/:index", (req, res) => {
  products[req.params.index] = req.body.name;
  res.send(products);
});

app.listen(5000);
