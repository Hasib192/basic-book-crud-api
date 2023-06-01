const router = require("express").Router();
const bookController = require("../controller/bookController");

router.get("/", (req, res) => {
  res.send("Working");
});

router.post("/books", bookController.createBook);
// router.get("/books", bookController.retrieveAllBook);

module.exports = router;
