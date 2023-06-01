const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./routes/bookRoute");

// write logs to a file
const morgan = require("morgan");
// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), { flags: "a" });
// setup the logger
app.use(morgan("combined", { stream: accessLogStream }));

require("dotenv").config();
const PORT = process.env.PORT || 3000;

// Middleware for JSON and URL
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/", router);

// Database connection
mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server Running ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
