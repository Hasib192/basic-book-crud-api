const bookModel = require("../model/bookSchema");

exports.createBook = async (req, res) => {
  const { title, author, description, publishedYear } = req.body;
  if (title.length == 0) {
    res.status(400).send("Title is required");
  }
  if (author.length == 0) {
    res.status(400).send("Author name is required");
  }
  const saveBook = new bookModel({
    title,
    author,
    description,
    publishedYear,
  });
  saveBook
    .save()
    .then(() => {
      res.status(201).json({
        msg: "Book Saved",
        data: saveBook,
      });
    })
    .catch((error) => console.log(error.message));
};
