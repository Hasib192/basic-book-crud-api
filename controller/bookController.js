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

exports.getAllBooks = async (req, res) => {
  const result = await bookModel.find({});
  if (result.length == 0) {
    res.status(400).send("Please add book first");
  }
  res.status(200).json({
    result,
  });
};

exports.getBookById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await bookModel.findById(id);
    if (!result) throw new Error("Book not found");
    res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      data: null,
    });
  }
};
