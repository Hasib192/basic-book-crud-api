const router = require("express").Router();
const { createBook, getAllBooks, getBookById, updateBookById, deleteBookById } = require("../controller/bookController");

router.get("/", (req, res) => {
  res.send("Api is working");
});

router.post("/books", createBook);
router.get("/books", getAllBooks);
router.get("/books/:id", getBookById);
router.put("/books/:id", updateBookById);
router.delete("/books/:id", deleteBookById);

module.exports = router;
