const express = require("express");

const mongoose = require("mongoose");
// const routes = require("./routes");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const PORT = process.env.PORT || 3001;

const app = express();

app.use(morgan("dev"));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use(require("./routes"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(express.static("client"));

mongoose.connect(process.env.MONGODB_URI || "localhost:3001", {
  useCreateIndex: true,
  useNewUrlParser: true
});

app.listen(PORT, () => console.log(`SERVER listening on PORT ${PORT}`));
