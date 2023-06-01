const router = require("express").Router();
const { createBook, getAllBooks, getBookById, updateBookById } = require("../controller/bookController");

router.get("/", (req, res) => {
  res.send("Api is working");
});

router.post("/books", createBook);
router.get("/books", getAllBooks);
router.get("/books/:id", getBookById);
router.put("/books/:id", updateBookById);

module.exports = router;
