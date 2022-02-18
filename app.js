const express = require("express");
const app = express();

app.use(express.static("public"));

// app.get("/", (req, res) => {
//   res.send("<h1>Hello World!</h1>");
// });

app.listen(process.env.PORT || 3001, () => {
  console.log("yes, connected to server...");
});
