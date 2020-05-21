const router = require("express").Router();
const axios = require("axios");

router.get("/:query", (req, res) => {
  const query = req.params.query;
  axios
    .get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    .then((results) => {
      results.data.items.filter(
        (result) =>
          result.volumeInfo.title &&
          result.volumeInfo.infoLink &&
          result.volumeInfo.authors &&
          result.volumeInfo.description &&
          result.volumeInfo.imageLinks &&
          result.volumeInfo.imageLinks.thumbnail
      );
    });
});
module.exports = router;
