const express = require("express");
const app = express();
app.use(express.json());

const books = [
  { id: 1, title: "Clean Code" },
  { id: 2, title: "Code Complete" },
  { id: 3, title: "Soft skills" },
  { id: 4, title: "Eloquent Javascript" },
  { id: 5, title: "Python crash course" },
];

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/", (req, res) => {
  res.send(["Clean Code", "Soft skills", "Python Crash course"]);
});

app.get("/:id", (req, res) => {
  res.send(req.params.id);
});

app.get("/api/articles", (req, res) => {
  res.send(req.query);
});

app.post("/", (req, res) => {
  const book = { id: books.length + 1, title: req.body.title };
  books.push(book);

  res.status(201).send(book);
});
app.listen(5000, () => {
  console.log("Hey! I am listening the 5000th port");
});
