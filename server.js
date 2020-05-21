const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const morgan = require("morgan");
// const bodyparser = require("body-parser");
const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(morgan("dev"));
// app.use(bodyparser.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(express.static("client"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/google", {
  // useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(PORT, () => console.log(`SERVER listening on PORT ${PORT}`));
