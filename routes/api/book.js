const router = require("express").Router();
const bookController = require("../../controllers/bookController");
const Book = require("../../models/book");

router
  .route("/")
  .get(async (req, res) => {
    const books = await Book.find();
    res.json(books);
  })
  .post(async (req, res) => {
    const result = await Book.create(req.body);
    res.json(result);
  });

router
  .route("/:id")
  .get(bookController.findById)
  .put(bookController.update)
  .delete(bookController.remove);

module.exports = router;
