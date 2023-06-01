const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();
const mongoose = require("mongoose");

// write logs to a file
const morgan = require("morgan");
const { error } = require("console");
// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), { flags: "a" });
// setup the logger
app.use(morgan("combined", { stream: accessLogStream }));

require("dotenv").config();
const PORT = process.env.PORT || 3000;

const router = require("./routes/bookRoute");

app.use("/", router);

mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server Running ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
