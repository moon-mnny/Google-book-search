const router = require("express").Router();
const path = require("path");
const bookApi = require("./book");

router.use("/books", bookApi);
router.use("/google", require("./google"));
router.get("/ping", (req, res) => {
  res.json("pong");
});

router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../../client/index.html"));
});

module.exports = router;
