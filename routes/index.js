const path = require("path");
const router = require("express").Router();

router.use("/api", require("./api"));
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "./client/index.html"))
);
module.exports = router;
