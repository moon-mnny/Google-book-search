const router = require("express").Router();
router.use("/books", require("./book"));
module.exports = router;
