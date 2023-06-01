const router = require("express").Router();
const { createBook, getAllBooks, getBookById } = require("../controller/bookController");

router.get("/", (req, res) => {
  res.send("Api is working");
});

router.post("/books", createBook);
router.get("/books", getAllBooks);
router.get("/books/:id", getBookById);

module.exports = router;
