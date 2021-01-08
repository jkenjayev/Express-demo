const express = require("express");
const app = express();

const books = [
    {id: 1, title: "Clean Code"},
    {id: 2, title: "Code Complete"},
    {id: 3, title: "Soft skills"},
    {id: 4, title: "Eloquent Javascript"},
    {id: 5, title: "Python crash course"},
];

app.get("/:id", (req, res) => {
    const book = books.find((b) => b.id === parseInt(req.params.id));
    if(!book) return res.status(404).send('not exits such book');
    res.send(book);
})