const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//import route.js
app.use("/api/auth", require("./Auth/route"));

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connected Successfully");
  });

app.listen(port, () => {
  console.log(`Server Connected to port ${port}`);
});
