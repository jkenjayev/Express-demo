const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const booksRouter = require("./routes/books");
const config = require("config");
const app = express();
app.use(express.json());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
if(app.get('env') === 'development') {
  app.use(morgan('tiny'));
  console.log("Logger ishlaypti...");
};
app.use("/api/books", booksRouter);
console.log(config.get('name'));
console.log(config.get('mailserver.host'));
console.log(process.env.NODE_ENV);
console.log(app.get('env'));

app.listen(5000, () => {
  console.log("Hey! I am listening the 5000th port");
});
