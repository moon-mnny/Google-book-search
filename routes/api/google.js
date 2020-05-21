const router = require("express").Router();
const axios = require("axios");

router.get("/:query", (req, res) => {
  const query = req.params.query;
  axios
    .get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    .then((results) => {
      console.log(results.data.items);
    });
});
module.exports = router;
