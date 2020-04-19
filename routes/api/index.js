const router = require("express").Router();
const path = require("path");
const bookApi = require("./book");

router.use("/books", bookApi);

router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../../client/index.html"));
});

module.exports = router;
