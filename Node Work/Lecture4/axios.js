console.clear();
let axios = require("axios");

axios
  .get("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => {
    console.log(res.data);
    console.log(Object.keys(res.data).length);
  })
  .catch((err) => {
    console.log(err);
  });
