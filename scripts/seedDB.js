const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/nytreact",
  {
    useMongoClient: true
  }
);

const bookSeed = [
  {
    title: "Test Title",
    url: "Test URL",
    date: "test date"
  },

  {
    title: "Test Title2",
    url: "Test URL2",
    date: "test date2"
  }
];

db.Article
  .remove({})
  .then(() => db.Article.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
