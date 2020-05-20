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
  .get(async (req, res) => {
    const book = await Book.findById(req.params.id);
    res.json(book);
  })
  .put(async (req, res) => {
    const result = await Book.findOneAndUpdate({ id: req.params.id }, req.body);
    res.json(result);
  })
  .delete(async (req, res) => {
    await Book.remove({ id: req.params.id });
    res.send("deleted");
  });

module.exports = router;
