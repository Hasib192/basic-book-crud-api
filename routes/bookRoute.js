const router = require("express").Router();
const { createBook } = require("../controller/bookController");

router.get("/", (req, res) => {
  res.send("Api is working");
});

router.post("/books", createBook);

module.exports = router;
