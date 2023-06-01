const bookModel = require("../model/bookSchema");

exports.createBook = async (req, res) => {
  const { title, author, description, publishedYear } = req.body;
  if (title.length == 0 || author.length == 0) {
    res.json(400).send("Required field must be given");
  }
  let saveBook = new bookModel({
    title: title,
    author: author,
    description: description,
    publishedYear: publishedYear,
  });
  saveBook
    .save()
    .then((doc) => {
      console.log(doc);
    })
    .catch((error) => {
      console.error(error);
    });
};
