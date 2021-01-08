const express = require("express");
const Joi = require("joi");
const helmet = require("helmet");
const morgan = require("morgan");
const app = express();
app.use(express.json());
app.use(helmet());
app.use(morgan('tiny'))
const books = [
  { id: 1, title: "Clean Code" },
  { id: 2, title: "Code Complete" },
  { id: 3, title: "Soft skills" },
  { id: 4, title: "Eloquent Javascript" },
  { id: 5, title: "Python crash course" },
];

app.get('/api/books', (req, res) => {
  res.send(books);
});

app.get('/api/books/:id', (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).send("Not found such book");
  
  res.send(book);
})
app.post("/api/books", (req, res) => {
  const { error } = validateBook(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const book = { id: books.length + 1, title: req.body.title };
  books.push(book);

  res.status(201).send(book);
});

app.put("/api/books/:id", (req, res) => {
  const { error } = validateBook(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).send("Not found such book");
  book.title = req.body.title;

  res.status(201).send(book);
});

app.delete('/api/books/:id', (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).send("Not found such book");
  const bookIndex = books.indexOf(book);
  books.splice(bookIndex, 1);

  res.send(book);
})

function validateBook(book) {
  const schema = {
    title: Joi.string().required().min(3),
  };

  return Joi.validate(book, schema);
}
app.listen(5000, () => {
  console.log("Hey! I am listening the 5000th port");
});
