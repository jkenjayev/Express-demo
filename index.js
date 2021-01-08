const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/", (req, res) => {
  res.send(["Clean Code", "Soft skills", "Python Crash course"]);
});

app.get("/:id", (req, res) => {
  
});
app.listen(5000, () => {
  console.log("Hey! I am listening the 5000th port");
});
