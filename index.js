const express = require("express");
const Joi = require("joi");
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

app.post("/api/books", (req, res) => {
  const { error } = validateBook(req.body);
  if(error) return res.status(400).send(error.details[0].message);
  const book = { id: books.length + 1, title: req.body.title };
  books.push(book);

  res.status(201).send(book);
});

function validateBook(book) {
  const schema = {
    title: Joi.string().required().min(3)
  }

  return Joi.validate(book, schema);
}
app.listen(5000, () => {
  console.log("Hey! I am listening the 5000th port");
});
